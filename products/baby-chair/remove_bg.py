from PIL import Image

def remove_white_bg(input_path, output_path, threshold=245):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # Check if the pixel is near-white
        if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
            # make it fully transparent
            new_data.append((255, 255, 255, 0))
        else:
            # Keep original pixel
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

remove_white_bg('modular.png', 'modular-transparent.png', threshold=245)
print("Success")
