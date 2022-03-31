const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data;
};

const onRefresh = () => {
    fetchData()
        .then((data) => {
            document.getElementById("advice_id").innerText = `ADVICE #${
                data?.slip?.id || "##"
            }`;

            document.getElementById("advice_paragraph").innerText = `"${
                data?.slip?.advice || "##"
            }"`;
        })
        .catch((err) => console.log(err));
};

document.getElementById("dice_btn").addEventListener("click", onRefresh);
