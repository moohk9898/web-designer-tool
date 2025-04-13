const htmlInput = document.getElementById('htmlInput');
const output = document.getElementById('output');
const suggestionsDiv = document.getElementById('suggestions');

const typos = ['hte', 'wrod', 'adn', 'teh']; // Example typos

const performanceRules = [
    {
        name: 'Unminified CSS',
        check: html => !html.includes('<link rel="stylesheet" href="style.min.css">'),
        suggestion: 'Consider minifying your CSS to reduce file size.'
    },
    {
        name: 'Missing Alt Attribute',
        check: html => !html.includes('<img alt="'),
        suggestion: 'Add alt attributes to your images for better accessibility and SEO.'
    },
    {
        name: 'Excessive Inline Styles',
        check: html => html.includes('style="'),
        suggestion: 'Avoid excessive use of inline styles. Use CSS classes instead.'
    }
];

function updateOutput() {
    let html = htmlInput.value;

    // Highlight typos
    typos.forEach(typo => {
        const regex = new RegExp(typo, 'gi');
        html = html.replace(regex, '<span style="background-color: yellow;">$&</span>');
    });

    output.contentDocument.body.innerHTML = html;

    // Performance analysis
    let suggestions = '';
    performanceRules.forEach(rule => {
        if (rule.check(html)) {
            suggestions += `<p>${rule.name}: ${rule.suggestion}</p>`;
        }
    });

    suggestionsDiv.innerHTML = suggestions;
}

// Live preview
htmlInput.addEventListener('input', updateOutput);

// Code completion (basic example)
htmlInput.addEventListener('keydown', (event) => {
    if (event.key === '<') {
        // Suggest HTML tags
        htmlInput.value += 'div>';
    }
});

// Syntax highlighting (basic example)
htmlInput.addEventListener('input', () => {
    let html = htmlInput.value;
    html = html.replace(/<[^>]*>/g, '<span style="color: blue;">$&</span>'); // Highlight tags
    htmlInput.style.fontFamily = 'monospace';
    htmlInput.style.whiteSpace = 'pre-wrap';
    updateOutput();
});

// Code folding (basic example)
htmlInput.addEventListener('click', () => {
    // Implement code folding logic here
    alert('Code folding not implemented yet.');
});

// Themes (basic example)
const themeButton = document.createElement('button');
themeButton.textContent = 'Toggle Theme';
themeButton.addEventListener('click', () => {
    // Implement theme toggling logic here
    alert('Theme toggling not implemented yet.');
});
suggestionsDiv.parentNode.insertBefore(themeButton, suggestionsDiv);

// Keyboard shortcuts (basic example)
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 's') {
        // Implement save functionality here
        alert('Save functionality not implemented yet.');
        event.preventDefault(); // Prevent default browser save action
    }
});

// Add buttons for minification and formatting
const minifyCSSButton = document.createElement('button');
minifyCSSButton.textContent = 'Minify CSS';
minifyCSSButton.addEventListener('click', () => {
    // Implement CSS minification logic here (e.g., remove whitespace)
    alert('CSS minification not implemented yet.');
});

const minifyJSButton = document.createElement('button');
minifyJSButton.textContent = 'Minify JavaScript';
minifyJSButton.addEventListener('click', () => {
    // Implement JavaScript minification logic here (e.g., remove whitespace)
    alert('JavaScript minification not implemented yet.');
});

const formatHTMLButton = document.createElement('button');
formatHTMLButton.textContent = 'Format HTML';
formatHTMLButton.addEventListener('click', () => {
    // Implement HTML formatting logic here (e.g., use indentation)
    alert('HTML formatting not implemented yet.');
});

suggestionsDiv.parentNode.insertBefore(minifyCSSButton, suggestionsDiv);
suggestionsDiv.parentNode.insertBefore(minifyJSButton, suggestionsDiv);
suggestionsDiv.parentNode.insertBefore(formatHTMLButton, suggestionsDiv);
