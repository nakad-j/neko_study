// console.log("JavaScriptを実行しています");
function clickBtn1(){
	// 値を取得
	const ta1 = document.form1.textarea1.value; 
	document.getElementById("span1").textContent = ta1;
}
function clickBtn2(){
	document.getElementById("span1").textContentz = "";
}