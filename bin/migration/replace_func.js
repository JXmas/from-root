(m,m1, offset, str) => {
    console.log("m:", m);
    return "fromRoot("+m1.split("/").map(e=>`'${e}'`).join(",")+")";
}
