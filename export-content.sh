#!/bin/bash

# Define the directories and files to include
included_paths=("README.md" "package.json" "src" "public")

project_name="Project"
version="1.0.0"

# Define file extensions for large files
large_file_extensions=(".ttf" ".otf" ".woff" ".woff2" ".jpg" ".jpeg" ".png" ".gif" ".svg" ".mp4" ".webm" ".ogg" ".mp3" ".wav")

# Function to build the project tree
build_project_tree() {
    local path=$1
    local depth=$2
    local items=$(ls -A "$path" | grep -vE '^(node_modules|dist)$')
    local tree=""

    for item in $items; do
        local indent=$(printf "%*s" $((depth * 4)) "")
        if [ -d "$path/$item" ]; then
            tree="${tree}${indent}+-- ${item}"$'\n'
            tree="${tree}$(build_project_tree "$path/$item" $((depth + 1)))"
        else
            tree="${tree}${indent}|   ${item}"$'\n'
        fi
    done

    echo -n "$tree"
}

# Build the project tree
project_tree=""
for path in "${included_paths[@]}"; do
    if [ -e "$path" ]; then
        if [ -d "$path" ]; then
            project_tree="${project_tree}+-- ${path}"$'\n'
            project_tree="${project_tree}$(build_project_tree "$path" 1)"
        else
            project_tree="${project_tree}|   ${path}"$'\n'
        fi
    fi
done

# Function to process files
process_file() {
    local file=$1
    local relative_path=${file#./}
    
    # Check if the file has a large file extension
    for ext in "${large_file_extensions[@]}"; do
        if [[ $file == *"$ext" ]]; then
            echo -e "\n[File] $relative_path\n<Large file, content not included>"
            return
        fi
    done

    echo -e "\n[File] $relative_path"
    cat "$file"
}

# Process included paths
file_contents=""
for path in "${included_paths[@]}"; do
    if [ -e "$path" ]; then
        if [ -d "$path" ]; then
            while IFS= read -r file; do
                file_contents="$file_contents$(process_file "$file")"
            done < <(find "$path" -type f -not -path '*/node_modules/*' -not -path '*/dist/*')
        else
            file_contents="$file_contents$(process_file "$path")"
        fi
    fi
done

# Build the final output
output="Project Name: $project_name
Version: $version

File Structure:
$project_tree
Content:
$file_contents"

# Write the output to a file
echo "$output" > project-files.txt

echo "File 'project-files.txt' has been created in the current directory."
