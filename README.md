# Playwright installation

1. npm i @playwright/test
2. npx playwright install

# Test command

1. npx playwright test --headed
   - opens up browser window

2. npx playwright test 
   - test in cli

3. npx playwright test <--headed> --browser=firefox
   - Change browser to firefox

4. npx playwright test <--headed> --browser=all
   - Test on all browsers

5. npx playwright test /example.spec.ts
   - Run a specific test file

6. npx playwright test tag.spec.ts --grep @myTag
   - Run only the @myTag tagged test

7. npx playwright test tag.spec.ts --grep-invert @myTag
   - Run tests except @myTag tagged tests

8. npx playwright test --config=playwright.config.ts --project=[Project Name]
   - Run tests based on the config

9. npx playwright test --config=playwright.config.ts --project=Chromium --reporter=html
    - Generate HTML report of the test

10. npm run tests:webkit -- --headed
    - '--' overwrites the test script. (Test config is headless in this case, it will run headful mode.)