# Desityle

> Desityle is a sleek and straightforward DIY CSS framework built from scratch with DIY(Do It Yourself) concept in mind.



<span id="desityle-usage"></span>

## Usage
You've made an excellent decision to give desityle a try. It's super-duper easy to integrate desityle in your websites.

<br />

1. **Using CDN:**
    - Just include our CSS and JS CDN files in your `index.html`(or any other `.html` file):
        
        ```html
        <link rel="stylesheet" href="https://unpkg.com/desityle@1.1.5/build/css/desityle.min.css" />

        <script src="https://unpkg.com/desityle@1.1.5/build/js/desityle.min.js"></script>
        ```
<br />

2. **Using in React or other JS Libraries/Frameworks:**
    - First, install desityle using NPM or Yarn:
      
        ```bash
        $ yarn add desityle@1.1.5
          # or
        $ npm install desityle@1.1.5 --save
        ```
    - Then Import in your libraries:

        ```javascript
        import 'desityle/build/css/desityle.min.css';
        ```
    - Currently, there is no way to import JS using libraries/framework; we're actively working on it.



<hr class="hr-center" />



<span id="desityle-di"></span>

## Development Installation
You can contribute to this project, but first, you'll need to set up your machine.

<br />

1. Clone this repo and cd into it:
    
    ```bash
    $ git clone https://github.com/drabkirn/desityle.git
    $ cd desityle
    ```
2. Install all dependencies:

    ```bash
    $ yarn install --check-files
    ```

3. All our source code is located in `src/` folder.

    ```bash
    $ cd src/
    ```

4. Make changes or tweak some bugs in this folder, meanwhile you can run a simple server to see your changes:

    ```bash
      # Example, to start on localhost:3002 or YOUR_IP:3002
    $ python -m SimpleHTTPServer 3002
    ```

5. After making changes, you can look the final look of your changes by building the app. We use `gulp` under the hood. This is exactly what our production users will see:

    ```bash
    $ yarn build
      # or
    $ npm run build
    ```

6. Serve you app from the build/ folder created by the above command.

    ```bash
    $ cd build
      # Example, to start on localhost:3002 or YOUR_IP:3002
    $ python -m SimpleHTTPServer 3002
    ```

7. When you think eveything is right and working smooth and well, you can checkout our [contributing guide](https://github.com/drabkirn/desityle/blob/master/CONTRIBUTING.md#contributing-to-drabkirn-desityle) to make a pull request.