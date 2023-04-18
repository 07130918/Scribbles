# run build and overwrite manifest.json
import json
import os


def main():
    os.system("npm run build")
    write_manifest()
    os.system("zip -r ./scribbles.zip ./build")


def write_manifest():
    content = {
        "name": "Scribbles",
        "description": "A simple notepad extension for Chrome",
        "manifest_version": 3,
        "version": "1.0.0",
        "permissions": ["activeTab", "storage"],
        "icons": {
            "16": "icons/icon16.png",
            "48": "icons/icon48.png",
            "128": "icons/icon128.png",
        },
        "action": {
            "default_title": "Open Scribbles",
            "default_popup": "index.html"
        },
    }

    os.system("touch ./build/manifest.json")
    with open("./build/manifest.json", "w") as f:
        json.dump(content, f, ensure_ascii=False, indent=4, separators=(",", ": "))


if __name__ == "__main__":
    main()
