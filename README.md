# NYT PieScraper

_This Google Chrome extension removes the paywall from New York Times cooking articles removing the paywall modal. Yes, it's that simple. PieScraper also removes advertisements._

## Key Features

- Removes NYT Cooking's paywall
- Removes advertisements from NYT Cooking

## Running the Extension

1. Clone this repository. No idea how to clone a repository? [Follow this guide](https://docs.github.com/en/get-started/quickstart/set-up-git).
2. Start Chrome.
3. Go to `chrome://extensions/`.
4. Enable Developer Mode by clicking the toggle in the top right corner.
5. Click the "Load unpacked" button in the top left corner.
6. Select the directory where you cloned this repository.
7. The extension should now be installed and active.


## How it Works
_The extension works by removing elements from the page that are responsible for the paywall and advertisements. Because of the way the class names are composed by appending unique identifiers (e.g. `modal_modal-window-container__59UFY`), the extension may break if the class names are changed. If the New York Times dev team actually cared, they could solve this by adding a watchdog script. Or, you know... not sending ALL of the recipe information before confirming that a user has access to the recipe. I presume they do this for SEO._

## Future Improvements
- [ ] Add a toggle to enable/disable autosave
- [ ] Add safari version of the extension

## FAQ
- **Q: Why did you make this?**

  *A: I try to follow the rules, but after I find the free recipe, I frequently end up closing out of the recipe only to open it up and find a paywall. Also, I'm a bad person!*


- **Q: I am from the New York Times development team. How do I prevent people from using this?**

  *A: To prevent anyone with basic curiosity and a computer from removing elements, I'd consider making the hurdle harder than .You could run an obfuscation script and generate a random class name for the paywall modal. Make sure that the class name is RegEx-proof by using `crypto.random()` (***NOT*** `Math.random()`) to generate a unique identifier. If you're concerned about SEO (the reason why you likely did this), consider ... [SUBSCRIBE TO LEARN MORE]('')* 

## License
MIT License





