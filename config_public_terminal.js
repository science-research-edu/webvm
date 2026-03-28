// The root filesystem location
export const diskImageUrl = "wss://disks.webvm.io/alpine_large_20230522_5044875331.ext2";
// The root filesystem backend type
export const diskImageType = "cloud";
// Print an introduction message about the technology
export const printIntro = true;
// Is a graphical display needed
export const needsDisplay = true;
// Executable full path (Required)
export const cmd = "/usr/bin/chromium";
// Arguments, as an array (Required)
export const args = ["--no-sandbox", "https://google.com"];
// Optional extra parameters
export const opts = {
	// Environment variables
	env: ["HOME=/home/user", "TERM=xterm", "USER=user", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C"],
	// Current working directory
	cwd: "/home/user",
	// User id
	uid: 1000,
	// Group id
	gid: 1000
};
