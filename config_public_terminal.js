// Point to the Alpine image which has the desktop and browser
export const diskImageUrl = "wss://disks.webvm.io/alpine_large_20230522_5044875331.ext2";
export const diskImageType = "cloud";
export const printIntro = true;
export const needsDisplay = true; // REQUIRED FOR GRAPHICS

// This opens Chromium to Google automatically
export const cmd = "/usr/bin/chromium";
export const args = ["--no-sandbox", "--disable-gpu", "https://google.com"];

export const opts = {
	env: ["HOME=/home/user", "TERM=xterm", "USER=user", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C"],
	cwd: "/home/user",
	uid: 1000,
	gid: 1000
};
