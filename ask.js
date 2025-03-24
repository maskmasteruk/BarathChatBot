document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

let ipcData = [
    {
      "section": "IPC 302",
      "offense": "Murder",
      "punishment": "Death or Life Imprisonment + Fine",
      "description": "Causing the death of a human being with intention or knowledge."
    },
    {
      "section": "IPC 307",
      "offense": "Attempt to Murder",
      "punishment": "Up to 10 Years + Fine (or Life Imprisonment if injury is caused)",
      "description": "Any act done with the intention or knowledge to cause death."
    },
    {
      "section": "IPC 376",
      "offense": "Rape",
      "punishment": "Minimum 10 Years to Life Imprisonment + Fine (varies with circumstances)",
      "description": "Sexual intercourse without consent."
    },
    {
      "section": "IPC 379",
      "offense": "Theft",
      "punishment": "Up to 3 Years or Fine or Both",
      "procedure": "The investigation procedure for a robbery typically involves several systematic steps to gather evidence, identify suspects, and build a case. \n\nHere’s a general outline:\n\n1. Initial Response\n\n\tArrival at Scene: Police officers secure the scene to prevent contamination of evidence. \n\n\tMedical Assistance: Provide aid to any injured victims. \n\n\tSuspect Search: If the suspect is nearby or identified, officers may initiate a search or pursuit. \n\n\tInterview Witnesses: Gather initial statements from victims, witnesses, and bystanders. \n\n2. Scene Investigation\n\n\tCrime Scene Preservation: Establish a perimeter to avoid evidence tampering. \n\n\tPhotography and Documentation: Capture photos and videos of the scene, including damaged property, stolen items, and any evidence left behind. \n\n\tEvidence Collection:\n\n\t\tFingerprints\n\n\t\tFootprints or tire marks\n\n\t\tBlood or other biological evidence\n\n\t\tWeapons or tools used in the robbery\n\n\t\tSurveillance footage from nearby cameras\n\n\tSketching the Scene: Create detailed sketches for reference. \n\n3. Victim and Witness Statements\n\n\tDetailed Interviews: Take formal statements from victims and witnesses, noting descriptions of the suspect, stolen items, and the sequence of events. \n\n\tComposite Sketches: If possible, work with sketch artists to create a suspect portrait. \n\n4. Investigative Follow-up\n\n\tSurveillance Review: Analyze footage from CCTV cameras. \n\n\tPhone Records and Digital Evidence: Examine relevant phone calls, messages, or GPS data. \n\n\tCheck Criminal Records: Compare the suspect's description with known offenders. \n\n\tWitness Identification: Conduct line-ups or photo arrays for potential identification. \n\n5. Forensic Analysis\n\n\tSubmit evidence to forensic labs for fingerprint analysis, DNA testing, or ballistic examination if firearms were used. \n\n6. Suspect Interrogation\n\n\tIf a suspect is apprehended, conduct interviews using lawful interrogation techniques to gather information or obtain a confession. \n\n7. Report and Documentation\n\n\tCompile a detailed investigation report, including findings, evidence, statements, and conclusions. \n\n8. Case Handoff\n\n\tWork closely with prosecutors to prepare the case for court. Provide testimony as needed.",
      "description": "Dishonest taking of movable property."
    },
    {
      "section": "IPC 420",
      "offense": "Cheating and dishonestly inducing delivery of property",
      "punishment": "Up to 7 Years + Fine",
      "description": "Cheating someone to deliver property."
    },
    {
      "section": "IPC 498A",
      "offense": "Cruelty by husband or relatives of husband",
      "punishment": "Up to 3 Years + Fine",
      "description": "Subjecting a woman to cruelty by her husband or his relatives."
    },
    {
      "section": "IPC 323",
      "offense": "Voluntarily causing hurt",
      "punishment": "Up to 1 Year or Fine or Both",
      "description": "Causing bodily pain, disease, or infirmity."
    },
    {
      "section": "IPC 324",
      "offense": "Voluntarily causing hurt by dangerous weapons or means",
      "punishment": "Up to 3 Years or Fine or Both",
      "description": "Causing hurt with dangerous weapons or means."
    },
    {
      "section": "IPC 326",
      "offense": "Voluntarily causing grievous hurt by dangerous weapons or means",
      "punishment": "Life Imprisonment or Up to 10 Years + Fine",
      "description": "Causing grievous hurt with dangerous weapons."
    },
    {
      "section": "IPC 341",
      "offense": "Wrongful restraint",
      "punishment": "Up to 1 Month or Fine or Both",
      "description": "Voluntarily obstructing any person."
    },
    {
      "section": "IPC 342",
      "offense": "Wrongful confinement",
      "punishment": "Up to 1 Year or Fine or Both",
      "description": "Wrongfully confining any person."
    },
    {
      "section": "IPC 406",
      "offense": "Criminal breach of trust",
      "punishment": "Up to 3 Years or Fine or Both",
      "description": "Dishonest misappropriation of property entrusted."
    },
    {
      "section": "IPC 417",
      "offense": "Cheating",
      "punishment": "Up to 1 Year or Fine or Both",
      "description": "Cheating someone."
    },
    {
      "section": "IPC 447",
      "offense": "Criminal trespass",
      "punishment": "Up to 3 Months or Fine or Both",
      "description": "Entering property with intent to commit offense."
    },
    {
      "section": "IPC 494",
      "offense": "Marrying again during lifetime of husband or wife",
      "punishment": "Up to 7 Years + Fine",
      "description": "Bigamy."
    },
    {
      "section": "IPC 500",
      "offense": "Defamation",
      "punishment": "Up to 2 Years or Fine or Both",
      "description": "Publishing defamatory matter."
    },
    {
      "section": "IPC 506",
      "offense": "Criminal intimidation",
      "punishment": "Up to 2 Years or Fine or Both",
      "description": "Threatening injury to person, reputation, or property."
    },
    {
      "section": "IPC 509",
      "offense": "Word, gesture or act intended to insult the modesty of a woman",
      "punishment": "Up to 3 Years or Fine or Both",
      "description": "Insulting a woman's modesty."
    },
    {
      "section": "IPC 143",
      "offense": "Being a member of an unlawful assembly",
      "punishment": "Up to 6 Months or Fine or Both",
      "description": "Being part of an unlawful assembly."
    },
    {
      "section": "IPC 147",
      "offense": "Rioting",
      "punishment": "Up to 2 Years or Fine or Both",
      "description": "Using force or violence by an unlawful assembly."
    },
    {
      "section": "IPC 149",
      "offense": "Every member of unlawful assembly guilty of offence committed in prosecution of common object",
      "punishment": "Same as the offence committed",
      "description": "Liability of members of unlawful assembly for offenses committed."
    },
    {
      "section": "IPC 354",
      "offense": "Assault or criminal force to woman with intent to outrage her modesty",
      "punishment": "Up to 2 Years or Fine or Both",
      "description": "Assaulting or using criminal force to outrage modesty."
    },
    {
      "section": "IPC 427",
      "offense": "Mischief causing damage to the amount of fifty rupees",
      "punishment": "Up to 2 Years or Fine or Both",
      "description": "Committing mischief causing damage."
    },
    {
      "section": "IPC 465",
      "offense": "Forgery",
      "punishment": "Up to 2 Years or Fine or Both",
      "description": "Making a false document or electronic record."
    },
    {
      "section": "IPC 468",
      "offense": "Forgery for purpose of cheating",
      "punishment": "Up to 7 Years + Fine",
      "description": "Forgery with intent to cheat."
    },
    {
      "section": "IPC 511",
      "offense": "Attempting to commit offences punishable with imprisonment for life or other imprisonment",
      "punishment": "Half of the longest term provided for the offence or as prescribed",
      "description": "Attempting to commit a crime."
    },
    {
      "section": "IPC 363",
      "offense": "Kidnapping",
      "punishment": "Up to 7 years + Fine",
      "description": "Kidnapping any person."
    },
    {
      "section": "IPC 366",
      "offense": "Kidnapping, abducting or inducing woman to compel her marriage, etc.",
      "punishment": "Up to 10 years + Fine",
      "description": "Kidnapping a woman to compel marriage."
    },
    {
      "section": "IPC 392",
      "offense": "Robbery",
      "punishment": "Up to 10 Years + Fine",
      "description": "Committing robbery."
    },
    {
      "section": "IPC 395",
      "offense": "Dacoity",
      "punishment": "Life Imprisonment or Up to 10 Years + Fine",
      "description": "Committing dacoity."
    },
    {
      "section": "IPC 489A",
      "offense": "Counterfeiting currency-notes or bank-notes",
      "punishment": "Life Imprisonment or Up to 10 Years + Fine",
      "description": "Counterfeiting currency."
    }
    
];

async function sendMessage() {
  const inputBox = document.getElementById('user-input');
  const userText = inputBox.value.trim();
  if (userText === "") return;

  appendMessage('user', userText);
  inputBox.value = "";

  const responseText = await getBotResponse(userText);
  appendMessage('bot', responseText);
}

function appendMessage(sender, text) {
  const chatWindow = document.getElementById('chat-window');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message');
  messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  messageDiv.innerText = text;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function getBotResponse(input) {
  try {
    const lowerInput = input.toLowerCase();
    const matchingData = ipcData.find(item => {
      return (
        item.section.toLowerCase().includes(lowerInput) ||
        item.offense.toLowerCase().includes(lowerInput) ||
        item.description.toLowerCase().includes(lowerInput) ||
        lowerInput.includes(item.offense.toLowerCase()) // Check if input contains offense
      );
    });

    if (matchingData) {
      if (matchingData.procedure == undefined) {
        return `Description: ${capitalize(matchingData.description)}\nOffense: ${matchingData.offense}\nPunishment: ${matchingData.punishment}\nSection: ${matchingData.section}`;

      }else{
        return `Description: ${capitalize(matchingData.description)}\nOffense: ${matchingData.offense}\nPunishment: ${matchingData.punishment}\nSection: ${matchingData.section}\n\n\nProcedure: ${matchingData.procedure}`;

      }
    }

    const response = await fetch(`/query?query=${encodeURIComponent(input)}`);
    if (!response.ok) {
      return "I'm sorry, I couldn't find any legal details for that query.";
    }
    const data = await response.json();
    return `Description: ${capitalize(data.description)}\nOffense: ${data.offense}\nPunishment: ${data.punishment}\nSection: ${data.section}`;
  } catch (error) {
    console.error('Error:', error);
    return "There was an error processing your request.";
  }
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}