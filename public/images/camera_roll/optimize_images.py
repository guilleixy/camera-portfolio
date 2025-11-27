from PIL import Image
import os
from pathlib import Path

def optimize_images(
    input_folder=".",
    output_folder="optimized",
    quality=75,
    max_size=None,
    file_range=None,
    specific_files=None
):
    """
    Optimiza imágenes JPG reduciendo su tamaño sin perder calidad visual.
    
    Args:
        input_folder: Carpeta de entrada (por defecto, carpeta actual)
        output_folder: Carpeta de salida (se crea si no existe)
        quality: Calidad JPEG (1-100, recomendado 75-85)
        max_size: Tuple (width, height) para redimensionar, ej: (1920, 1080)
        file_range: Tuple (inicio, fin) para procesar rango de números, ej: (1, 10)
        specific_files: Lista de nombres de archivo específicos, ej: ['1.jpg', '5.jpg']
    """
    
    # Crear carpeta de salida
    output_path = Path(output_folder)
    output_path.mkdir(exist_ok=True)
    
    # Obtener lista de archivos a procesar
    files_to_process = []
    
    if specific_files:
        files_to_process = specific_files
    elif file_range:
        start, end = file_range
        files_to_process = [f"{i}.jpg" for i in range(start, end + 1)]
    else:
        # Procesar todos los JPG en la carpeta
        files_to_process = [f for f in os.listdir(input_folder) 
                           if f.lower().endswith(('.jpg', '.jpeg'))]
    
    # Procesar cada imagen
    for filename in files_to_process:
        input_path = Path(input_folder) / filename
        
        if not input_path.exists():
            print(f"❌ No encontrado: {filename}")
            continue
        
        try:
            # Abrir imagen
            img = Image.open(input_path)
            
            # Redimensionar si se especifica max_size
            if max_size:
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Convertir a RGB si es necesario (elimina canal alpha)
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Guardar optimizada
            output_file = output_path / filename
            img.save(
                output_file,
                'JPEG',
                quality=quality,
                optimize=True,
                progressive=True
            )
            
            # Mostrar estadísticas
            original_size = input_path.stat().st_size / 1024  # KB
            optimized_size = output_file.stat().st_size / 1024  # KB
            reduction = ((original_size - optimized_size) / original_size) * 100
            
            print(f"✅ {filename}: {original_size:.1f}KB → {optimized_size:.1f}KB ({reduction:.1f}% reducción)")
            
        except Exception as e:
            print(f"❌ Error procesando {filename}: {e}")

# ========== EJEMPLOS DE USO ==========

# Ejemplo 1: Optimizar todas las imágenes con calidad 75%
# optimize_images(quality=75)

# Ejemplo 2: Optimizar imágenes del 1.jpg al 20.jpg con calidad 80%
# optimize_images(quality=80, file_range=(1, 20))

# Ejemplo 3: Optimizar archivos específicos
# optimize_images(quality=85, specific_files=['5.jpg', '10.jpg', '15.jpg'])

# Ejemplo 4: Optimizar y redimensionar a 1920x1080 máximo
# optimize_images(quality=80, max_size=(1920, 1080))

# Ejemplo 5: Optimizar rango con redimensionado
# optimize_images(quality=75, max_size=(2560, 1440), file_range=(1, 50))

if __name__ == "__main__":
    # CONFIGURA AQUÍ TU OPTIMIZACIÓN:
    optimize_images(
        quality=35,           # Calidad: 75-85 es bueno, 60-70 para mayor compresión
        file_range=(1, 110),   # Procesar del 1.jpg al 10.jpg
        # max_size=(1920, 1080)  # Opcional: redimensionar
    )