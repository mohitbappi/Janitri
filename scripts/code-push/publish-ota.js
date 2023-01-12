/* eslint-disable*/
const fs = require("fs");
const path = require("path");

const { exec } = require("./utils");

const args = process.argv.slice(2);

const env = args[0];
let isMandatory = args[1];
let desc = "";
if (isMandatory !== "-m") {
	desc = isMandatory;
	isMandatory = false;
} else {
	desc = args[2];
}

function runCommand(cmd) {
	console.log("Executing:", cmd);
	return exec(cmd);
}

function checkExistence(cmd) {
	return runCommand(`which ${cmd}`)
		.then((res) => {
			return res.code === 0;
		})
		.catch(() => false);
}

function checkIfFileExists(file) {
	return runCommand(`ls "${file}"`)
		.then(() => true)
		.catch(() => false);
}

async function releaseOTA() {
	// check if desc present
	if (!desc) {
		console.log("Please provide description");
		return;
	}

	// check if appcenter is installed
	console.log("Checking if appcenter is installed");
	const isAppcenterInstalled = await checkExistence("appcenter");
	if (!isAppcenterInstalled) {
		console.log("Appcenter is not installed. Installing appcenter...");
		const installAppcenter = await runCommand("npm i -g appcenter-cli");
		console.log(installAppcenter);
	} else {
		console.log("Appcenter is installed. Continuing...");
	}

	// TODO: Integrate app centre token based flow
	// ios: 7f4bb942cb76d47a995031429778a6aec5bec1ca
	// android: 7de4b0f1946b188674c0e0ea300a7d00e7243f84

	// await releaseAndroidOTA();
	await releaseIosOTA();
}

async function releaseAndroidOTA() {
	// publish Android bundle
	console.log("Publishing Android bundle");
	await runCommand(
		`appcenter codepush release-react -a prashant.dwivedi-janitri.in/Janitri-for-Mothers -d ${env} ${
			isMandatory || ""
		} ${
			desc ? `--description "${desc}"` : ""
		} --sourcemap-output --output-dir ./build`
	);

	console.log("Android OTA published...");
}

async function releaseIosOTA() {
	// check if project file exists
	const projectPath = path.resolve("ios/project.pbxproj");
	console.log("Checking if project files exists at " + projectPath);
	const isProjectFilePresent = await checkIfFileExists(projectPath);
	if (isProjectFilePresent) {
		console.log("Project file exists. Deleting...");
		fs.unlinkSync(projectPath);
		console.log("Project file deleted");
	}

	// copy latest project file
	const projectFileOriginalPath = path.resolve(
		"ios/Janitri.xcodeproj/project.pbxproj"
	);
	console.log(
		`Copying latest project file from ${projectFileOriginalPath} to ${projectPath}`
	);
	fs.copyFileSync(projectFileOriginalPath, projectPath);

	// publish iOS bundle
	console.log("Publishing iOS bundle");
	await runCommand(
		`appcenter codepush release-react -a prashant.dwivedi-janitri.in/Janitri-for-Mothers -p ios/Janitri/Info.plist -d ${env} ${
			isMandatory || ""
		} ${
			desc ? `--description "${desc}"` : ""
		} --sourcemap-output --output-dir ./build`
	);

	// remove project file
	console.log("Removing project file");
	fs.unlinkSync(projectPath);
	console.log("Project file removed");
	console.log("iOS OTA published...");
}

releaseOTA();
