

function getFileTitle(htmlContent) {
	const regexResultTitle = htmlContent.match(/{% set title = ["']([^"]+)["'] %}/);
	return regexResultTitle && regexResultTitle[1] ? regexResultTitle[1] : "";
}

function getFileName(assetInfo) {
	let extType = assetInfo.name.split(".").pop();
	if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
		extType = "img/site";
	}

	if (/ttf|eot|woff2?/i.test(extType)) {
		extType = "fonts";
	}

	return `assets/${extType}/[name][extname]`;
}



