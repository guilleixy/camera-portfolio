import os

folder = os.getcwd()

files = [f for f in os.listdir(folder) if f.lower().endswith('.jpg')]

files.sort()

# First pass: rename to temporary names to avoid conflicts
temp_names = []
for i, file in enumerate(files):
    temp_name = f"temp_{i}.jpg"
    ruta_original = os.path.join(folder, file)
    ruta_temp = os.path.join(folder, temp_name)
    os.rename(ruta_original, ruta_temp)
    temp_names.append(temp_name)

# Second pass: rename to sequential numbers
counter = 1
for temp_name in temp_names:
    new_name = f"{counter}.jpg"
    ruta_temp = os.path.join(folder, temp_name)
    ruta_nueva = os.path.join(folder, new_name)
    os.rename(ruta_temp, ruta_nueva)
    print(f"Renaming: {temp_name} -> {new_name}")
    counter += 1

print("Renaming done.")