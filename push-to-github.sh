#!/bin/bash

# Script to push project to GitHub
# Run this after accepting Xcode license: sudo xcodebuild -license

echo "Initializing git repository..."
git init

echo "Adding all files..."
git add .

echo "Committing changes..."
git commit -m "Update website: light theme, hero adjustments, footer styling, and navigation fixes"

echo "Adding remote repository..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/Ismakaleeba/ismael.git

echo "Setting main branch..."
git branch -M main

echo "Pushing to GitHub..."
git push -u origin main

echo "Done! Check https://github.com/Ismakaleeba/ismael to verify."

