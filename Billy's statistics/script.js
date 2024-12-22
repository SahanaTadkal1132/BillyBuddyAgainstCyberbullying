// Sample data for quick lookup
const statisticsData = [
    { location: "Lucknow", cyberbullying_percentage: 8.4, serious_cases: "High incidents in educational institutions, rising social media harassment cases, cyber cafe-related incidents, major cases in universities and colleges" },
{ location: "Patna", cyberbullying_percentage: 7.8, serious_cases: "Increasing reports from educational zones, social media impersonation cases, growing incidents in coaching institutes, cyber cafe-related harassment" },
{ location: "Kolkata", cyberbullying_percentage: 9.8, serious_cases: "Metropolitan city facing significant social media harassment, academic institution cases, corporate sector incidents, dating app-related harassment" },
{ location: "Jaipur", cyberbullying_percentage: 7.9, serious_cases: "Tourist city reporting increasing social media harassment, student community affected, rising cases in coaching hubs" },
{ location: "Shimla", cyberbullying_percentage: 4.8, serious_cases: "Tourist destination seeing moderate cases, primarily affecting students and young professionals, social media related incidents" },
{ location: "Dehradun", cyberbullying_percentage: 5.3, serious_cases: "Educational hub reporting cases from schools and colleges, social media harassment increasing, boarding school related incidents" },
{ location: "Chandigarh (Punjab)", cyberbullying_percentage: 9.5, serious_cases: "High-profile cases in universities, professional networking harassment, significant social media related incidents" },
{ location: "Chandigarh (Haryana)", cyberbullying_percentage: 9.5, serious_cases: "Shared capital showing similar patterns, educational institution cases, corporate sector harassment" },
{ location: "Dispur", cyberbullying_percentage: 5.2, serious_cases: "Growing cases with increasing internet penetration, social media related harassment, student community affected" },
{ location: "Itanagar", cyberbullying_percentage: 3.4, serious_cases: "Limited but growing cases, mostly affecting young users, social media related incidents" },
{ location: "Kohima", cyberbullying_percentage: 3.4, serious_cases: "Low number of cases but increasing with internet adoption, youth-centric incidents" },
{ location: "Imphal", cyberbullying_percentage: 3.8, serious_cases: "Moderate cases mainly in educational institutions, social media harassment reports" },
{ location: "Aizawl", cyberbullying_percentage: 3.2, serious_cases: "Few cases reported, mainly affecting younger population, social media related incidents" },
{ location: "Shillong", cyberbullying_percentage: 3.5, serious_cases: "Educational hub seeing rising cases, social media harassment, student community affected" },
{ location: "Agartala", cyberbullying_percentage: 3.6, serious_cases: "Growing incidents with digital adoption, mainly affecting students and young professionals" },
{ location: "Gangtok", cyberbullying_percentage: 3.3, serious_cases: "Tourist destination reporting limited cases, mainly social media related harassment" },
{ location: "Srinagar", cyberbullying_percentage: 6.2, serious_cases: "Summer capital seeing moderate cases, social media harassment prominent" },
{ location: "Jammu", cyberbullying_percentage: 5.8, serious_cases: "Winter capital reporting growing incidents, educational institution cases prevalent" },
{ location: "Bengaluru", cyberbullying_percentage: 12.4, serious_cases: "Tech capital reporting high cases: workplace cyberbullying in IT sector, widespread social media harassment, gaming community incidents, startup culture related bullying, dating app harassment" },
{ location: "Mumbai", cyberbullying_percentage: 18.7, serious_cases: "Financial capital showing severe cases: corporate harassment, entertainment industry targeting, social media trolling, professional network bullying, significant cases in colleges" },
{ location: "Chennai", cyberbullying_percentage: 10.5, serious_cases: "Tech hub experiencing: IT sector harassment, cinema industry related bullying, educational institution cases, gaming community conflicts, social media impersonation" },
{ location: "Hyderabad", cyberbullying_percentage: 11.8, serious_cases: "Tech city reporting: IT sector incidents, startup ecosystem harassment, educational institution cases, social media trolling, cyberstalking in professional networks" },
{ location: "Amaravati", cyberbullying_percentage: 8.1, serious_cases: "New capital witnessing: administrative sector harassment, educational institution cases, growing social media incidents, professional network bullying" },
{ location: "Panaji", cyberbullying_percentage: 9.2, serious_cases: "Tourist hub facing: tourism sector related harassment, social media targeting, dating app incidents, student community cases" },
{ location: "Raipur", cyberbullying_percentage: 5.6, serious_cases: "Growing city reporting: educational sector cases, social media harassment, professional network incidents, increasing youth-related cases" },
{ location: "Bhubaneswar", cyberbullying_percentage: 6.8, serious_cases: "Educational hub seeing: academic institution harassment, social media bullying, professional sector cases, increasing tech-related incidents" },
{ location: "Gandhinagar", cyberbullying_percentage: 8.4, serious_cases: "Administrative capital experiencing: government sector related harassment, educational institution cases, social media targeting, professional network bullying" },
{ location: "Bhopal", cyberbullying_percentage: 7.1, serious_cases: "State capital reporting: educational sector harassment, social media incidents, professional network cases, growing youth-related bullying" },
{ location: "Ranchi", cyberbullying_percentage: 6.2, serious_cases: "Growing cases in: educational institutions, social media platforms, professional networks, youth community targeting" },
{ location: "Thiruvananthapuram", cyberbullying_percentage: 8.9, serious_cases: "Tech-aware city showing: IT sector harassment, educational institution cases, social media targeting, professional network bullying" }

];
  

function fetchStatistics() {
    const locationInput = document.getElementById('locationInput').value.trim();
    const resultDiv = document.getElementById('result');
    
    // Find the statistics based on the user input
    const stats = statisticsData.find(item => 
        item.location.toLowerCase() === locationInput.toLowerCase()
    );
    
    // Display results
    if (stats) {
        resultDiv.innerHTML = `
            <h3>Statistics for ${stats.location}</h3>
            <p>Cyberbullying Rate: ${stats.cyberbullying_percentage}%</p>
            <p>Serious Cases: ${stats.serious_cases}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p>No data available for this location.</p>";
    }
}

