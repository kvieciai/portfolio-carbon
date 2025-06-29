const CleanCSS = require("clean-css");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = (config) => {
    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');
	config.addPassthroughCopy("./src/fonts/");
	config.addPassthroughCopy("./src/robots.txt");

	// Minify inline CSS using cssmin filter
	config.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	config.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["avif", "jpeg"],
        
        // Output directory
        outputDir: './dist/images',

		// Output image widths
		widths: [640, 1280, 3200, 4000],

		// Optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
                sizes: '100vw',
				decoding: "async",
			},
			pictureAttributes: {}   
		},

		sharpAvifOptions: {
			effort: 4, // 0 (fastest) to 9 (slowest, best compression)
			quality: 50, // reasonable balance of quality/size
			tile: true, // ✅ Enables AVIF tiling
			tileCols: 2, // Optional: number of tile columns
			tileRows: 2  // Optional: number of tile rows
		}
	});
	
	// Returns work items, sorted by display order
	config.addCollection('work', (collection) => {
		return collection
			.getFilteredByGlob('./src/work/*.md')
			.sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
	});

	return {
        markdownTemplateEngine: 'njk',
	    dataTemplateEngine: 'njk',
	    htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist',
		},
	};
};