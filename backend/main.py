from flask import Flask, send_from_directory
from pathlib import Path
import os
import sys

# --- PATH RESOLUTION (CRITICAL FIX) ---

# 1. Determine the absolute path to the project root
PROJECT_ROOT = Path(__file__).parent.parent.resolve()

# 2. Set the path where the Angular files were COPIED by the build script.
# This must match the target directory in build_and_run.bat: 'backend/static/browser'
FRONTEND_SERVE_DIR_PATH = PROJECT_ROOT / 'backend' / 'static' / 'browser'

# Convert to string for Flask config
FRONTEND_SERVE_DIR = str(FRONTEND_SERVE_DIR_PATH)

# --- APPLICATION SETUP ---
# Flask constructor will use the FRONTEND_SERVE_DIR for serving static files
# and to find index.html.
ressiteMain = Flask(__name__,
                    static_folder=FRONTEND_SERVE_DIR) # Flask will look here for assets

# --- Diagnostic Print (Should now point to the correct path!) ---
print(f"--- DIAGNOSTICS ---", file=sys.stderr)
print(f"Flask Serving Path: {FRONTEND_SERVE_DIR}", file=sys.stderr)
print(f"File Exists?: {os.path.exists(FRONTEND_SERVE_DIR)}", file=sys.stderr)
print(f"Index Exists?: {os.path.exists(os.path.join(FRONTEND_SERVE_DIR, 'index.html'))}", file=sys.stderr)
print(f"--- END DIAGNOSTICS ---", file=sys.stderr)
# -------------------------------------------------------------------

@ressiteMain.route("/api/hello")
def api_hello():
    """Example API endpoint to verify the backend is running."""
    return {"message": "Hello from Flask Backend! (Port 5000)"}

# --- ANGULAR ROUTING INTEGRATION ---

# 1. Serve the main index.html file for the root path
@ressiteMain.route('/')
def serve_root():
    """Serves index.html from the build directory."""
    # This now looks inside the 'backend/static/browser' directory
    return send_from_directory(FRONTEND_SERVE_DIR, 'index.html')

# 2. Catch-all route for Angular client-side routing
@ressiteMain.route('/<path:path>')
def serve_angular_routes(path):
    """
    Catch-all route to serve index.html for Angular's client-side router.
    This handles deep links like /dashboard and static assets.
    """
    # Flask's static handler will serve files that match names,
    # but we need this catch-all for Angular's SPA routes.
    if path and '.' not in path:
        # If the path has no extension (likely an Angular route like /about)
        return send_from_directory(FRONTEND_SERVE_DIR, 'index.html')
    else:
        # For static assets (like .js, .css, images)
        # We rely on the 'static_folder' property set above.
        # This function acts as a final fallback for static files and Angular routes.
        # Flask usually handles static assets automatically from the static_folder.
        try:
             return send_from_directory(FRONTEND_SERVE_DIR, path)
        except:
             # If a file is not found (404), return the index.html for Angular routing
             return send_from_directory(FRONTEND_SERVE_DIR, 'index.html')


if __name__ == "__main__":
    ressiteMain.run()