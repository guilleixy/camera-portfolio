import os

folder = os.getcwd()

files = [f for f in os.listdir(folder) if f.lower().endswith('.jpg')]

files.sort()

for i, file in enumerate(files, start=1):
    new_name = f"{i}.jpg"
    ruta_original = os.path.join(folder, file)
    ruta_nueva = os.path.join(folder, new_name)
    os.rename(ruta_original, ruta_nueva)
    print(f"Renaming: {file} -> {new_name}")

print("Renaming done.")
