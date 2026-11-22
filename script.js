function mux4to1(D0, D1, D2, D3, S1, S0) {
    let select = S1 * 2 + S0;

    if (select === 0) {
        return D0;
    }
    else if (select === 1) {
        return D1;
    }
    else if (select === 2) {
        return D2;
    }
    else {
        return D3;
    }}
console.log(mux4to1(1, 0, 0, 0, 0, 0));
console.log(mux4to1(0, 1, 0, 0, 0, 1));
console.log(mux4to1(0, 0, 1, 0, 1, 0));
console.log(mux4to1(1, 1, 0, 1, 1, 0));
function decoder2to4(A, B) {
    let select = A * 2 + B;
    let outputs = [0, 0, 0, 0];
    outputs[select] = 1;
    return outputs;
}

console.log(mux4to1(1, 0, 1, 0, 0, 0));
console.log(decoder2to4(1, 0));
console.log(mux4to1(0, 1, 0, 1, 1, 0));
function muxWithCheck(d0, d1, d2, d3, s1, s0) {
    let names = ["D0", "D1", "D2", "D3", "S1", "S0"];
    let values = [d0, d1, d2, d3, s1, s0];

    for (let i = 0; i < values.length; i++) {
        let text = String(values[i]).trim();

        if (text === "") {
            return "Error: " + names[i] + " is empty. Please enter 0 or 1 only";
        }
        if (text !== "0" && text !== "1") {
            return "Error: " + names[i] + " is invalid. Please enter 0 or 1 only";
        }
    }

    return mux4to1(Number(d0), Number(d1), Number(d2), Number(d3), Number(s1), Number(s0));
}
console.log(muxWithCheck("1", "0", "1", "0", "1", "0"));
console.log(muxWithCheck("1", "", "1", "0", "1", "0"));
console.log(muxWithCheck("1", "0", "5", "0", "1", "0"));
console.log(muxWithCheck("1", "0", "abc", "0", "1", "0"));
function runMux() {
    let d0 = document.getElementById("d0").value;
    let d1 = document.getElementById("d1").value;
    let d2 = document.getElementById("d2").value;
    let d3 = document.getElementById("d3").value;
    let s1 = document.getElementById("s1").value;
    let s0 = document.getElementById("s0").value;

    let answer = muxWithCheck(d0, d1, d2, d3, s1, s0);
    document.getElementById("muxResult").innerText = "Output: " + answer;
}
