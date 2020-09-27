import Sciences from './components/Search/Search'
import ModalSimple from "./components/Modal/simples/Modal_simple";
//import Ajax from './function/ajax/Ajax'
import Time from './function/time/Time'
import Html from './function/html/Html'
import Window from './function/window/Window'
import * as UTF from './function/utf/UTF'
import maths from './function/Math/Math'
import Code from './function/code/Code'
const Search = (req, reqid) => {
	const getid = document.getElementById(reqid)
	getid.innerHTML = Sciences(req);
}
const Modal_simple = (req, reqid) => {
	const getid = document.getElementById(reqid)
	getid.innerHTML = ModalSimple(req);
}
const Aimg = (req, reqid) => {
	const getid = document.getElementById(reqid)
	getid.innerHTML = `<div class=${req.divcass} id=${req.divid}>
		<a
		href=${req.url}
		id=${req.aid}
		class=${req.aclass} 
		>
			<img
				src=${req.img}
				alt=""
				class=${req.imgclass}
				id=${req.imgid}
			/>
		</a>
	</div>`
}
const Accordion = (req, reqid) => {
	const getid = document.getElementById(reqid)
	getid.innerHTML = `<div>
				<ul class="accordion-tabs-minimal">
					<li class="tab-header-and-content">
						<a href="#" class="tab-link is-active">${req.title1}</a>
						<div class="tab-content" id="1">
							<p class="text-p-accordion" id="accordiontab-1">${req.text1}</p>
						</div>
					</li>
					<li class="tab-header-and-content">
						<a href="#" class="tab-link">${req.title2}</a>
						<div class="tab-content" id="2">
							<p class="text-p-accordion" id="accordiontab-2">${req.text2}</p>
						</div>
					</li>
					<li class="tab-header-and-content">
						<a href="#" class="tab-link">${req.title3}</a>
						<div class="tab-content" id="3">
							<p class="text-p-accordion" id="accordiontab-3">${req.text3}</p>
						</div>
					</li>
					<li class="tab-header-and-content">
						<a href="#" class="tab-link">${req.title4}</a>
						<div class="tab-content" id="4">
							<p class="text-p-accordion" id="accordiontab-4">${req.text4}</p>
						</div>
					</li>
				</ul>
			</div>`;

}
const Thedetails = (req, reqid) => {
	const getid = document.getElementById(reqid)
	getid.innerHTML = `<div>
				<p>Producer: ${req.producer}</p>
				<p>Programming languages: ${req.programming}</p>
			</div>`
}
const Sns = () => {
	const getid = document.getElementById(reqid)
	getid.innerHTML = `<div class="btn-sns">
				<a href=${req.url} class=${req.classs} btn-hover>
					<span class=${req.span}>
						<i class=${req.i}></i>
					</span>Follow Me</a>
			</div>`;
}
class css {
	constructor() {
		this.Colorid = (id, color) => {
			let Htmlcolor = document.getElementById(id)
			Htmlcolor.style.color = color
		}
		this.Colorclass = (classs, color) => {
			let Htmlcolor = document.getElementsByClassName(classs)
			Htmlcolor.style.color = color
		}
	}
}
let Random = (num) => {
	return Math.floor(Math.random() * num);
};
let nCr = (n = 1, r = 1) => {
	//nCr
	let x, z;
	let y;
	let age = 1;
	y = n;
	z = r;
	x = 0;
	while (x == 0) {
		if (r == 1) {
			y = y * r;
		}
		r--;
		if (r == 0) {
			x++;
		} else {
			n--;
			if (n == 0) {
				x++;
				break;
			}
			y = y * n;
		}
	}
	for (let i = 2; i <= z; i++) {
		age *= i;
	}
	y = y / age;
	return y;
}
let Pow = (num, n) => {
	//xのy乗
	let nums = num;
	for (let i = 2; i <= n; i++) {
		nums *= num;
	}
	return nums;
}
let Repetition = (x = 1) => {
	//階乗
	let age = 1;
	for (let i = 2; i <= x; i++) {
		age *= i;
	}
	return age;
}
let nPr = (n, r) => {
	//nPr
	let y;
	let x = 0;
	y = n;
	while (x == 0) {
		if (r == 1) {
			y = y * r;
		}
		r--;
		if (r == 0) {
			x++;
		} else {
			n--;
			if (n == 0) {
				x++;
				break;
			}
			y = y * n;
		}
	}
	return y;
}
let Gcd = (f = 1, x = 1) => {
	//最大公約数
	let r, tmp;
	if (f < x) {
		tmp = f;
		f = x;
		x = tmp;
	}
	/* ユークリッドの互除法 */
	r = f % x;
	while (r != 0) {
		f = x;
		x = r;
		r = f % x;
	}
	return x;
}
let Ratio = (a, b, x, y) => {
	//比率
	a *= y;
	b *= x;
	if (a < b) {
		if ((b % a) == 0) {
			return b / a;
		} else {
			return `${a}/${b}`;
		}
	} else {
		if ((a % b) == 0) {
			return a / b;
		} else {
			return `${b}/${a}`;
		}
	}
}
let Diagonal = (n) => {
	//対角線の数
	n = (n * (n - 3)) / 2;
	return n;
}
let Maths = new maths();
let Mathsnew = () => {
	let math = new maths();
	return math;
}
let Css = new css();
/*let Cssnew = () => {
	let cs = new css();
	return cs;
}*/

let Zeller = (y = 2000, m = 1, d = 1, lan = jp) => {
	if (m < 3) {
		y--;
		m += 12;
	}
	let w = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((13 * m + 8) / 5) + d) % 7;
	if (w == 0) {
		if (lan = en) {
			w = "Sunday"
		} else if (lan = jp) {
			w = "日曜日";
		}
	} else if (w == 1) {
		if (lan = en) {
			w = "Manday"
		} else if (lan = jp) {
			w = "月曜日";
		}
	} else if (w == 2) {
		if (lan = en) {
			w = "Tuesday"
		} else if (lan = jp) {
			w = "火曜日";
		}
	} else if (w == 3) {
		if (lan = en) {
			w = "Wedneday"
		} else if (lan = jp) {
			w = "水曜日";
		}
	} else if (w == 4) {
		if (lan = en) {
			w = "Thursday"
		} else if (lan = jp) {
			w = "木曜日";
		}
	} else if (w == 5) {
		if (lan = en) {
			w = "Friday"
		} else if (lan = jp) {
			w = "金曜日";
		}
	} else {
		if (lan = en) {
			w = "Saturday"
		} else if (lan = jp) {
			w = "土曜日";
		}
	}
	return w;
}
let Push = (array, text) => {
	let Pushs = array.push(text);
	return Pushs
}
let Com = (num, num2) => {
	let gcdnum = Gcd(3, 4);
	num = (num * num2) / gcdnum;
	return num;
}
let Spt = (num = 1, num2 = 1) => {
	num2 = num + num2;
	num *= 100;
	return num / num2;
}
let Day = new Date();
const hello = () => {
	console.log("Welcome to FCC You can take the tutorial by accessing this URL");
	console.log("https://riya81.github.io/FCC/");
}
export {
	hello,
	Modal_simple,
	Accordion,
	Thedetails,
	//Text,
	Maths,
	Mathsnew,
	maths,
	Random,
	nCr,
	nPr,
	Pow,
	Repetition,
	Gcd,
	Ratio,
	Diagonal,
	Zeller,
	Push,
	Com,
	Spt,
	Window,
	UTF,
	Day,
	Css,
	//Button,
	Aimg,
	//CSS,
	Search,
	//Ajax,
	Time,
	Html,
	Code
	//FCC_jQuery
};
//α version