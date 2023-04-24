#!/usr/bin/env node

# !! Please Follow Rules To Skip Errors
# 1- install zip package

# Main Variables 
outname=output;

# Create Folder to read output files
mkdir $outname;

# Loop in directory files.
for FILE in *; do

  # Check if this file not node_modules
  if [[ $FILE != node_modules && $FILE != $outname && $FILE != .next ]]; then
    cp -r $FILE $outname;
  fi
done

# Add Hidden Files
cp -r .git $outname
cp -r .gitignore $outname
cp -r .editorconfig $outname

# Now Select output Version
printf "Version: ";
read version;

# Zip This File
zip -r point-ecommerce-${version}.zip $outname

# Remove Output file
rm -rf $outname

