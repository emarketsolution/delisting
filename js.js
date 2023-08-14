document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// -------------------------------------------------------------------- filtre bounce -------------------------------------------------------------------- 
function extractLines(inputText) {
  const searchText = "550 5.7.1 Unfortunately";
  const lines = inputText.split("\n");
  const filteredLines = lines.filter(line => line.includes(searchText));
  
  // Create an object to store the last occurrence of each IP address
  const lastOccurrences = {};
  
  filteredLines.forEach(line => {
    const ipAddressMatch = line.match(/\((\d+\.\d+\.\d+\.\d+)\)/);
    if (ipAddressMatch) {
      const ipAddress = ipAddressMatch[1];
      lastOccurrences[ipAddress] = line;
    }
  });
  
  const resultText = Object.values(lastOccurrences).join("\n");
  return resultText;
}

// -----------------------------------


// --------------------------------------------------------------------	returrn ip and errors 	------------------------------------------------------------------------------------
function txt1_txt6(text) {
  const regex = /(Error: "[^"]*"[^\n]*)/g;
  const matches = text.match(regex);

  const errorMessages = [];

  if (matches) {
    for (const match of matches) {
      errorMessages.push(match);
    }
  }

  // Sort errorMessages based on the IP addresses
  errorMessages.sort((msg1, msg2) => {
    const ipRegex = /messages from \[([\d.]+)\]/;
    const ip1 = msg1.match(ipRegex)[1];
    const ip2 = msg2.match(ipRegex)[1];
    return ip1.localeCompare(ip2, undefined, { numeric: true });
  });

  return errorMessages;
}
// -------------------
function txt1_txtips(errorMessages) {
  const regex = /messages from \[([\d.]+)\]/;
  const ips = [];

  for (const errorMessage of errorMessages) {
    const match = errorMessage.match(regex);
    if (match && match[1]) {
      ips.push(match[1]);
    }
  }

  return ips;
}











// --------------------------------------------------------------------	REPLACE SPACE <SP>	------------------------------------------------------------------------------------







// --------------------------------------------------------------------	return ips not found 	------------------------------------------------------------------------------------




// --------------------------------------------------------------------	return imacros 	------------------------------------------------------------------------------------

function generateMacroScript(ips, errors, domains, email) {
  const names = [
  'Alice<SP>Smith',
  'Bob<SP>Johnson',
  'Charlie<SP>Williams',
  'David<SP>Brown',
  'Eva<SP>Miller',
  'Grace<SP>Wilson',
  'Henry<SP>JAVADI',
  'Ivy<SP>Wilson',
  'Jack<SP>Clark',
  'Alice<SP>Smith',
  'Bob<SP>Johnson',
  'Charlie<SP>Williams',
  'David<SP>Brown',
  'Eva<SP>Miller',
  'Grace<SP>Wilson',
  'Henry<SP>JAVADI',
  'Ivy<SP>Wilson',
  'Jack<SP>Clark',
  'Karen<SP>Taylor',
  'Alice<SP>Smith',
  'Bob<SP>Johnson',
  'Charlie<SP>Williams',
  'David<SP>Brown',
  'Eva<SP>Miller',
  'Grace<SP>Wilson',
  'Henry<SP>JAVADI',
  'Ivy<SP>Wilson',
  'Jack<SP>Clark',
  'Karen<SP>Taylor',
  'Liam<SP>Garcia',
  'Olivia<SP>Martinez',
  'Noah<SP>Robinson',
  'Emma<SP>Miller',
  'Sophia<SP>Hernandez',
  'Aiden<SP>Davis',
  'Isabella<SP>Johnson',
  'Lucas<SP>Williams',
  'Mia<SP>Brown',
  'Luna<SP>Davis',
  'Elijah<SP>Taylor',
  'Ava<SP>Clark',
  'James<SP>Lee',
  'Charlotte<SP>Wilson',
  'Ethan<SP>Anderson',
  'Amelia<SP>Smith',
  'Michael<SP>Johnson',
  'Emily<SP>Garcia',
  'Benjamin<SP>Davis',
  'Scarlett<SP>Williams',
  'William<SP>Smith',
  'Chloe<SP>Robinson',
  'Alexander<SP>Hernandez',
  'Grace<SP>Taylor',
  'Oliver<SP>Clark',
  'Abigail<SP>Davis',
  'Daniel<SP>Brown',
  'Sophie<SP>Miller',
  'Logan<SP>Wilson',
  'Harper<SP>Smith',
  'Matthew<SP>Johnson',
  'Ella<SP>Garcia',
  'Jackson<SP>Davis',
  'Aria<SP>Anderson',
  'Sebastian<SP>Robinson',
  'Avery<SP>Hernandez',
  'Lucas<SP>Taylor',
  'Aria<SP>Taylor',
  'Jayden<SP>Smith',
  'Ellie<SP>Davis',
  'Carter<SP>Johnson',
  'Lily<SP>Garcia',
  'Wyatt<SP>Williams',
  'Zoe<SP>Clark',
  'Grayson<SP>Brown',
  'Layla<SP>Smith',
  'Henry<SP>Johnson',
  'Scarlett<SP>Garcia',
  'Joseph<SP>Davis',
  'Mila<SP>Anderson',
  'Levi<SP>Robinson',
  'Aubrey<SP>Hernandez',
  'Oliver<SP>Taylor',
  'Elizabeth<SP>Clark',
  'Dylan<SP>Smith',
  'Sofia<SP>Davis',
  'Mateo<SP>Johnson',
  'Grace<SP>Garcia',
  'Theodore<SP>Williams',
  'Camila<SP>Hernandez',
  'Leo<SP>Taylor',
  'Hazel<SP>Smith',
  'Ethan<SP>Johnson',
  'Luna<SP>Garcia',
  'Daniel<SP>Robinson',
  'Avery<SP>Clark',
  'Jameson<SP>Brown',
  'Aurora<SP>Davis',
  'Jackson<SP>Smith',
  'Nova<SP>Johnson',
  'Samuel<SP>Garcia',
  'Stella<SP>Williams',
  'Benjamin<SP>Taylor',
  'Lucy<SP>Hernandez',
  'Joshua<SP>Clark',
  'Paisley<SP>Davis',
  'Christopher<SP>Smith',
  'Hannah<SP>Johnson',
  'Andrew<SP>Garcia',
  'Aaliyah<SP>Hernandez',
  'Olivia<SP>Taylor',
  'Liam<SP>Martinez',
  'Emma<SP>Rodriguez',
  'Noah<SP>Ramirez',
  'Olivia<SP>Hernandez',
  'Sophia<SP>Gonzalez',
  'Isabella<SP>Perez',
  'Ava<SP>Torres',
  'Mia<SP>Flores',
  'Lucas<SP>Rivera',
  'Harper<SP>Cruz',
  'Alexander<SP>Diaz',
  'Charlotte<SP>Sanchez',
  'Ethan<SP>Valdez',
  'Amelia<SP>Smith',
  'Benjamin<SP>Adams',
  'Ella<SP>Scott',
  'Logan<SP>Brown',
  'Luna<SP>Mitchell',
  'Elijah<SP>Hall',
  'Avery<SP>Wright',
  'Jameson<SP>Foster',
  'Aria<SP>Gray',
  'Carter<SP>Allen',
  'Scarlett<SP>Long',
  'Mateo<SP>Young',
  'Lily<SP>Green',
  'Jackson<SP>Lewis',
  'Zoe<SP>Turner',
  'Grayson<SP>Martinez',
  'Hazel<SP>Harris',
  'Aria<SP>Smith',
  'Sofia<SP>Williams',
  'Leo<SP>Johnson',
  'Lucy<SP>Davis',
  'Theodore<SP>Martinez',
  'Layla<SP>Clark',
  'Muhammad<SP>Martin',
  'Chloe<SP>Adams',
  'Samuel<SP>Garcia',
  'Stella<SP>Hernandez',
  'Daniel<SP>Smith',
  'Paisley<SP>Johnson',
  'Joseph<SP>Lopez',
  'Grace<SP>Gonzalez',
  'John<SP>Rodriguez',
  'Aaliyah<SP>Hernandez',
  'Henry<SP>Lee',
  'Camila<SP>Perez',
  'Liam<SP>Torres',
  'Emily<SP>Wright',
  'Oliver<SP>Taylor',
  'Nora<SP>Scott',
  'Ethan<SP>Diaz',
  'Aurora<SP>Ramirez',
  'Alexander<SP>Hall',
  'Mila<SP>Foster',
  'David<SP>Gray',
  'Victoria<SP>Turner',
  'Benjamin<SP>Lewis',
  'Luna<SP>Adams',
  'Ava<SP>Smith',
  'Lucas<SP>Williams',
  'Lily<SP>Johnson',
  'Leo<SP>Davis',
  'Sophia<SP>Martinez',
  'Ella<SP>Rodriguez',
  'Jackson<SP>Harris',
  'Aria<SP>Gonzalez',
  'Muhammad<SP>Lopez',
  'Grace<SP>Martin',
  'Aiden<SP>Clark',
  'Isabella<SP>Turner',
  'Ethan<SP>Miller',
  'Olivia<SP>Foster',
  'Theodore<SP>Gray',
  'Nora<SP>Long',
  'Aurora<SP>Young',
  'Henry<SP>Green',
  'Liam<SP>Lewis',
  'Camila<SP>Hall',
  'John<SP>Hernandez',
  'Lucy<SP>Smith',
  'Daniel<SP>Taylor',
  'Victoria<SP>Scott',
  'Lily<SP>Diaz',
  'Alexander<SP>Ramirez',
  'Ava<SP>Adams',
  'Lucas<SP>Turner',
  'Nora<SP>Williams',
  'Ella<SP>Johnson',
  'Jackson<SP>Davis',
  'Grace<SP>Harris',
  'David<SP>Gonzalez',
  'Emily<SP>Smith',
  'Benjamin<SP>Martin',
  'Sophia<SP>Clark',
  'Aiden<SP>Turner',
  'Olivia<SP>Foster',
  'Avery<SP>Smith',
  'Karen<SP>Taylor'
  ];
  const Dedicated = ['Unknown', 'Dedicated', 'Shared'];
  const timeZones = [
  "Israel<SP>Standard<SP>Time",
  "Kaliningrad<SP>Standard<SP>Time",
  "Central<SP>Europe<SP>Standard<SP>Time",
  "W.<SP>Europe<SP>Standard<SP>Time",
  "GMT<SP>Standard<SP>Time",
  "Morocco<SP>Standard<SP>Time",
  "Central<SP>European<SP>Standard<SP>Time",
  "W.<SP>Central<SP>Africa<SP>Standard<SP>Time",
  "Jordan<SP>Standard<SP>Time",
  "GTB<SP>Standard<SP>Time",
  "Middle<SP>East<SP>Standard<SP>Time",
  "Egypt<SP>Standard<SP>Time",
  "South<SP>Africa<SP>Standard<SP>Time",
  "North<SP>Asia<SP>Standard<SP>Time",
  "North<SP>Asia<SP>Standard<SP>Time",
  "SE<SP>Asia<SP>Standard<SP>Time",
  "Myanmar<SP>Standard<SP>Time",
  "Central<SP>Asia<SP>Standard<SP>Time",
  "Sri<SP>Lanka<SP>Standard<SP>Time",
  "AUS<SP>Central<SP>Standard<SP>Time",
  "Cen.<SP>Australia<SP>Standard<SP>Time",
  "Taipei<SP>Standard<SP>Time",
  "Korea<SP>Standard<SP>Time",
  "Tokyo<SP>Standard<SP>Time",
  "W.<SP>Australia<SP>Standard<SP>Time",
  "Singapore<SP>Standard<SP>Time",
  "Ulaanbaatar<SP>Standard<SP>Time",
  "China<SP>Standard<SP>Time",
  "Korea<SP>Standard<SP>Time",
  "Tokyo<SP>Standard<SP>Time",
  "Ulaanbaatar<SP>Standard<SP>Time",
  "China<SP>Standard<SP>Time",
  "North<SP>Asia<SP>Standard<SP>Time",
  "SE<SP>Asia<SP>Standard<SP>Time",
  "Central<SP>Asia<SP>Standard<SP>Time",
  "N.<SP>Central<SP>Asia<SP>Standard<SP>Time",
  "SE<SP>Asia<SP>Standard<SP>Time",
  "Myanmar<SP>Standard<SP>Time",
  "Central<SP>Asia<SP>Standard<SP>Time",
  "Sri<SP>Lanka<SP>Standard<SP>Time",
  "AUS<SP>Central<SP>Standard<SP>Time",
  "Cen.<SP>Australia<SP>Standard<SP>Time",
  "Taipei<SP>Standard<SP>Time",
  "Korea<SP>Standard<SP>Time",
  "Tokyo<SP>Standard<SP>Time",
  "W.<SP>Australia<SP>Standard<SP>Time",
  "Singapore<SP>Standard<SP>Time",
  "Ulaanbaatar<SP>Standard<SP>Time",
  "China<SP>Standard<SP>Time",
  "Korea<SP>Standard<SP>Time",
  "Tokyo<SP>Standard<SP>Time",
  "Ulaanbaatar<SP>Standard<SP>Time",
  "China<SP>Standard<SP>Time",
  "North<SP>Asia<SP>Standard<SP>Time",
  "SE<SP>Asia<SP>Standard<SP>Time",
  "Central<SP>Asia<SP>Standard<SP>Time",
  "N.<SP>Central<SP>Asia<SP>Standard<SP>Time",
  ];


  const namesList = names.map(name => `${name}`).join("' '");
  const domainsList = domains.join(' ');
  const provider = [
  "Internet<SP>Service<SP>Provider<SP>(ISP)",
  "E-mail<SP>Service<SP>Provider<SP>(ESP)",
  "Windows<SP>Live<SP>Hotmail<SP>Customer",
  "Customer<SP>of<SP>an<SP>ISP<SP>other<SP>than<SP>Windows<SP>Live<SP>Hotmail",
  "University<SP>IT",
  "Business<SP>(non-marketing)",
  "Other"
];

	let scriptTemplate = "";
	  scriptTemplate += `\n`;
  for (let i = 1; i <= ips.length; i++) {
  scriptTemplate += `' ${i} `;
}

  scriptTemplate += `\n`;

  for (let i = 0; i < ips.length; i++) {
	const email1 = email[Math.floor(Math.random() * email.length)];
	const randomIndexProvider = Math.floor(Math.random() * provider.length);
	const randomProvider = provider[randomIndexProvider];
	const randomIndexName = Math.floor(Math.random() * names.length);
	const randomName = names[randomIndexName];
	const randomIndexZone = Math.floor(Math.random() * timeZones.length);
	const randomZone = timeZones[randomIndexZone];
	const randomIndexDedicated = Math.floor(Math.random() * Dedicated.length);
	const randomDedicated = Dedicated[randomIndexDedicated];
	
	const domainsArray = domainsList.split(' ');

	
    scriptTemplate += `
TAB OPEN
TAB T=${i + 1}
SET !ERRORIGNORE YES
SET !TIMEOUT_PAGE 5
SET !TIMEOUT_STEP 20
SET !TIMEOUT_DOWNLOAD 15
VERSION BUILD=9030808 RECORDER=FX
URL GOTO=https://olcsupport.office.com/
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:IssueTitle CONTENT=bounce
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:ContactName CONTENT=${randomName}
TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:DomainTo CONTENT=%hotmail.com
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:ContactEmail CONTENT=${email1}
TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:ddlTimezones CONTENT=%${randomZone}
TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:NoFormName ATTR=ID:DomainFrom CONTENT=${domainsArray[i]}
TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:SelfDescription CONTENT=%${randomProvider}
TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:IpAddresses CONTENT=${ips[i]}
TAG POS=1 TYPE=SELECT FORM=NAME:NoFormName ATTR=ID:ServerType CONTENT=%${randomDedicated}
TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:ErrorMessages CONTENT=${errors[i]}
TAG POS=1 TYPE=TEXTAREA FORM=NAME:NoFormName ATTR=ID:WebsiteUrl CONTENT=http://${domainsArray[i]}/
wait seconds=5
TAG POS=1 TYPE=BUTTON FORM=NAME:NoFormName ATTR=TXT:Submit`;
  }
  scriptTemplate += `\n`;
  return scriptTemplate;
}
function spaceError(errorMessages) {
  return errorMessages.map(message => message.replace(/\s+/g, '<SP>'));
}


  // ------------------------------------------------------------------------------------------
let emailList = [];
let domains = [];
let ips = [];
let errorMessages = [];
let email_input = document.getElementById("textarea5");
let dom_input = document.getElementById("textarea2");
let bounce_input = document.getElementById("textarea1");

document.getElementById("execute-btn").addEventListener("click", function() {
	
 const inputText = document.getElementById("textarea1").value;
   if(inputText === ""){
	    bounce_input	.classList.add("empty-textarea");
   }
   else{
		   const extractedText = extractLines(inputText);
		   const errorrr = txt1_txt6(extractedText);
		   ips =txt1_txtips(errorrr);
		  if (ips.length === 0) {
		   alert('Error: The PMTA IPS is empty.');
		} else if (ips.length > 117) {
		   alert('Error: The number of IPS is greater than 117.');
		} else {
		   errorMessages = errorrr;  
		  
	 }
	  
 }
  

	// document.getElementById("textarea3").value = errorMessages.join("\n");
	document.getElementById("textarea3").value = ips.join("\n");
	
});

document.addEventListener("DOMContentLoaded", function() {
  const imacrosButton = document.getElementById("imacros-btn");
  const downloadLink = document.getElementById("download-link"); // Define downloadLink here
  
  imacrosButton.addEventListener("click", function() {
    const email = document.getElementById("textarea5").value;
    emailList = email.split("\n").map(email => email.trim());  
    const dom = document.getElementById("textarea2").value;
    domains = dom.split("\n").map(email => email.trim());  
    const errorT = spaceError(errorMessages);

    // Check if the input values are empty
    if (dom_input.value.trim() === "") {
      dom_input.classList.add("empty-textarea");
    }
    if (email === "") {
      email_input.classList.add("empty-textarea");
    }
    
    if (domains.length > ips.length) {
      alert('Error: There are more domains than IPS.');
    } else if (domains.length < ips.length) {
      alert('Error: There are more IPS than domains.');
    } else if (email_input.value.trim() === "") {
      email_input.classList.add("empty-textarea");
    } else {
      // No error conditions, proceed with your code logic here
      document.getElementById("textarea3").value = errorT.join("\n");
      const generatedScript = generateMacroScript(ips, errorT, domains, emailList);

      // Update the download link
      downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(generatedScript);
      downloadLink.style.display = 'block'; // Make the link visible

      // Update the textarea with the generated script
      document.getElementById("textarea4").value = generatedScript;
    }
  });
});

// jQuery code
$(document).ready(function() {
  $("#textarea5").click(function() {
    email_input.classList.remove("empty-textarea");
  });

  $("#textarea2").click(function() {
    dom_input.classList.remove("empty-textarea");
  });
  
  $("#textarea1").click(function() {
    bounce_input.classList.remove("empty-textarea");
  });
});
