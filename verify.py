from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Landing Page
        print("Visiting Landing Page...")
        page.goto("http://localhost:5173/")
        page.wait_for_selector("h1") # "Your AI Sales Assistant and Manager"
        page.screenshot(path="/tmp/landing_page.png")
        print("Landing Page screenshot saved.")

        # 2. About Page
        print("Visiting About Page...")
        page.goto("http://localhost:5173/about")
        page.wait_for_selector("h1") # "Empowering sales teams..."
        page.screenshot(path="/tmp/about_page.png")
        print("About Page screenshot saved.")

        # 3. Sign In Page
        print("Visiting Sign In Page...")
        page.goto("http://localhost:5173/signin")
        page.wait_for_selector("form")
        page.screenshot(path="/tmp/signin_page.png")
        print("Sign In Page screenshot saved.")

        # 4. Perform Login
        print("Performing Login...")
        # Fill form
        page.fill("input[type='email']", "test@company.com")
        page.fill("input[type='password']", "password")
        page.click("button[type='submit']")

        # 5. Dashboard
        print("Waiting for Dashboard...")
        page.wait_for_url("**/app")
        # Wait for "SaleAI Workspace"
        page.wait_for_selector("h1", timeout=10000)
        # Wait for cards to appear
        page.wait_for_selector(".grid", timeout=5000)
        page.screenshot(path="/tmp/dashboard_page.png", full_page=True)
        print("Dashboard Page screenshot saved.")

        browser.close()

if __name__ == "__main__":
    verify()
