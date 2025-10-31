from flask import Flask, send_from_directory
from pathlib import Path
import os
import sys # Import sys for printing diagnostics

# --- PATH RESOLUTION (CRITICAL FIX) ---

# Determine the absolute path to the project root (the directory containing 'backend' and 'dist')
# Path(__file__).parent is '.../ressite-python/backend'
# Path(__file__).parent.parent is '.../ressite-python' (the project root)
PROJECT_ROOT = Path(__file__).parent.parent.resolve()

# The path where Angular's build process places the compiled files (dist/ressite-fe/browser)
FRONTEND_DIST_DIR_PATH = PROJECT_ROOT / 'frontend' / 'dist' / 'frontend' / 'browser'

# Convert to string for Flask config and for clearer path operations
FRONTEND_DIST_DIR = str(FRONTEND_DIST_DIR_PATH)

# --- APPLICATION SETUP ---
# Application Instance Name: ressiteMain
# We explicitly set static_folder here to serve Angular's assets (main.js, styles.css)
ressiteMain = Flask(__name__,
                    static_folder=FRONTEND_DIST_DIR)

# --- Diagnostic Print (Check your PyCharm console for this path!) ---
print(f"--- DIAGNOSTICS ---", file=sys.stderr)
print(f"Flask Serving Path: {FRONTEND_DIST_DIR}", file=sys.stderr)
print(f"File Exists?: {os.path.exists(FRONTEND_DIST_DIR)}", file=sys.stderr)
print(f"Index Exists?: {os.path.exists(os.path.join(FRONTEND_DIST_DIR, 'index.html'))}", file=sys.stderr)
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
    return send_from_directory(FRONTEND_DIST_DIR, 'index.html')

# 2. Catch-all route for Angular client-side routing
@ressiteMain.route('/<path:path>')
def serve_angular_routes(path):
    """
    Catch-all route to serve index.html for Angular's client-side router.
    This handles deep links like /dashboard and static assets.
    """
    if path and '.' not in path:
        # If the path has no extension (likely an Angular route like /about)
        return send_from_directory(FRONTEND_DIST_DIR, 'index.html')
    else:
        # For static assets (like .js, .css, images)
        return send_from_directory(FRONTEND_DIST_DIR, path)


if __name__ == "__main__":
    # The 'debug=True' mode is handled by the FLASK_ENV=development environment variable
    # in PyCharm, but this allows for execution outside PyCharm as well.
    ressiteMain.run()
