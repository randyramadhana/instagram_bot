var casper = require('casper').create({
	verbose: true,
	logLevel: "debug"
});
var fs = require('fs');
var fname = "page.html";
var save = fs.pathJoin(fs.workingDirectory, 'log', fname);

var count = 5;



/*casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
});*/

var casper = require('casper').create({
	verbose: true,
	logLevel: "debug"
});
var prefix = "badabudibada";
var suffix = "testlaptop" + count;
var username = prefix + suffix;
var email = prefix + "+" + suffix + "@gmail.com";
var fullname = "badabudi";
var password = "budibadabudi";


casper.start('https://www.instagram.com', function() {
	fs.write(save, this.getPageContent() + '\n', 'w');
});

casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36');

casper.waitForSelector("form[class='_3bqd5']", function() {
		console.log("FORM FOUND!!!");
		this.fillSelectors("form[class='_3bqd5']", {
			'input[name="email"]' : email,
			'input[name="fullName"]' : fullname,
			'input[name="username"]' : username,
			'input[name="password"]' : password,
		});
		/*casper.sendKeys('input[name="email"]', "" + email, {reset: true});
		casper.sendKeys('input[name="fullName"]', "" + fullname, {reset: true});
		casper.sendKeys('input[name="username"]', "" + username, {reset: true});
		casper.sendKeys('input[name="password"]', "" + password, {reset: true});*/

		console.log("Logging in...");
		this.click("form[class='_3bqd5'] div button._1on88");
		casper.wait(4000, function() {
			fname = "homePage.html";
			save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
			fs.write(save, this.getPageContent() + '\n', 'w');

			// logout
			casper.start('https://www.instagram.com/' + username, function() {
				fname = "profilePage.html";
				save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
				fs.write(save, this.getPageContent() + '\n', 'w');
				this.click("div._de9bg div._8mm5v a._qu5wj button._fcwm8");
				this.click("ul._c4s9s li._bt6iq button._4y3e3");
				casper.wait(3000, function() {
					fname = "instagramPage.html";
					save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
					fs.write(save, this.getPageContent() + '\n', 'w');
					count++;
				});
			});
			/*casper.start('https://instagram.com/farandyramadhana', function() {
				fname = "profilePage.html";
				save = fs.pathJoin(fs.workingDirectory, 'nwaomachux', fname);
				fs.write(save, this.getPageContent() + '\n', 'w');
				this.click("div._hcch2 span button._jvpff");
			});*/
		});
	});

casper.run();









