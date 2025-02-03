console.log("matches.js تم تحميله بنجاح");
document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2025-02-03";

    fetch(apiUrl, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        const matches = data.response;
        const tableBody = document.getElementById("matches-table");
        tableBody.innerHTML = "";

        matches.forEach(match => {
            let homeTeam = match.teams.home.name;
            let awayTeam = match.teams.away.name;
            let matchTime = new Date(match.fixture.date);
            let status = match.fixture.status.short;
            let score = `${match.goals.home ?? "-"} : ${match.goals.away ?? "-"}`;
            
            let displayStatus = "لم تبدأ بعد";
            if (status === "NS") displayStatus = "لم تبدأ بعد";
            else if (status === "1H" || status === "2H") displayStatus = "المباراة جارية";
            else if (status === "FT") displayStatus = "المباراة انتهت";

            let row = `<tr>
                <td>${homeTeam}</td>
                <td>${awayTeam}</td>
                <td>${matchTime.toLocaleTimeString()}</td>
                <td>${displayStatus}</td>
                <td>${score}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error("Error fetching match data:", error));
});