


async function checkLogin() {
        const { data, error } = await client.auth.getSession();

        if (error) {
            console.error(error);
            return;
        }

        if (!data.session) {
            window.location.href = "login.html";
            return;
        }

        console.log("ログイン中！");
    }

    checkLogin();

const logout = document.querySelector(".logout");
logout.addEventListener("click", async () => {
        const { error } = await client.auth.signOut();
        checkLogin();
});