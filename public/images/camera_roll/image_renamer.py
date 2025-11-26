import os
import re

folder = os.getcwd()

# Get all JPG files
files = [f for f in os.listdir(folder) if f.lower().endswith('.jpg')]

# Separate numbered files from unnumbered ones
numbered_files = {}
unnumbered_files = []

for file in files:
    match = re.match(r'^(\d+)\.jpg$', file)
    if match:
        number = int(match.group(1))
        numbered_files[number] = file
    else:
        unnumbered_files.append(file)

# Sort unnumbered files for consistent processing
unnumbered_files.sort()

# Find gaps in the sequence
if numbered_files:
    max_number = max(numbered_files.keys())
    all_numbers = set(range(1, max_number + 1))
    existing_numbers = set(numbered_files.keys())
    gaps = sorted(all_numbers - existing_numbers)
    
    if gaps:
        print(f"⚠️  Gaps found in sequence: {gaps}")
    
    # Fill gaps with unnumbered files
    for file in unnumbered_files[:]:
        if gaps:
            gap_number = gaps.pop(0)
            new_name = f"{gap_number}.jpg"
            ruta_original = os.path.join(folder, file)
            ruta_nueva = os.path.join(folder, new_name)
            os.rename(ruta_original, ruta_nueva)
            print(f"Filling gap: {file} -> {new_name}")
            unnumbered_files.remove(file)
    
    # Add remaining unnumbered files after the max number
    counter = max_number + 1
else:
    # No numbered files exist, start from 1
    counter = 1

# Rename remaining unnumbered files
for file in unnumbered_files:
    new_name = f"{counter}.jpg"
    ruta_original = os.path.join(folder, file)
    ruta_nueva = os.path.join(folder, new_name)
    os.rename(ruta_original, ruta_nueva)
    print(f"Adding new: {file} -> {new_name}")
    counter += 1

print("\n✅ Renaming done.")