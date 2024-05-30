import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const healthConditionsData = [
  {
    title: "Fever",
    generalInfo: "Fever is a temporary increase in body temperature, often as a response to an infection or illness. The normal body temperature range is typically around 97°F to 99°F (36.1°C to 37.2°C), but it can vary slightly from person to person. Fever itself is not an illness, but rather a sign that the body is fighting off an infection or other medical condition.",
    symptoms: [
      "Elevated body temperature above the normal range",
      "Sweating",
      "Chills or shivering",
      "Headache",
      "Muscle aches",
      "Loss of appetite",
      "General weakness or fatigue",
      "Dehydration"
    ],
    causes: [
      "Infections: Most commonly viral or bacterial infections such as the flu, common cold, urinary tract infections, pneumonia, or COVID-19.",
      "Inflammatory conditions: Conditions such as rheumatoid arthritis or inflammatory bowel disease can cause fever.",
      "Heat exhaustion or heat stroke: Exposure to extreme heat can lead to fever.",
      "Medications: Some medications may cause fever as a side effect.",
      "Immunizations: Fever can sometimes occur as a response to vaccines."
    ],
    riskFactors: [
      "Age: Infants and young children are more prone to fever.",
      "Weakened immune system: Individuals with compromised immune systems are at higher risk.",
      "Chronic medical conditions: Conditions such as diabetes, heart disease, or cancer may increase the risk of fever."
    ],
    complications: [
      "Febrile seizures: Young children with high fevers may experience seizures, although these are usually not harmful.",
      "Dehydration: Fever can lead to increased fluid loss through sweating, which may result in dehydration.",
      "Worsening of underlying conditions: Fever can exacerbate symptoms in individuals with certain chronic medical conditions."
    ],
    prevention: [
      "Good hygiene practices: Regular handwashing can help prevent the spread of infections.",
      "Vaccinations: Keeping up to date with vaccinations can prevent certain infections that may cause fever.",
      "Avoiding close contact with sick individuals: Minimize contact with individuals who are ill to reduce the risk of infection transmission."
    ],
    preventionText: "If you live in or visit areas where valley fever is common, take common-sense precautions, especially during the dry season following a rainy season when the chance of infection is highest."
  },
  {
    title: "Asthma",
    generalInfo: "Asthma is a chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to difficulty breathing. It affects people of all ages, but it often starts in childhood. Asthma can vary in severity from mild to life-threatening and typically requires ongoing management.",
    generalInfo2: "Asthma is a manageable condition with proper treatment and lifestyle adjustments. Patients should work closely with healthcare providers to develop an asthma action plan, use prescribed medications correctly, and monitor their condition regularly. Educating oneself about asthma and taking proactive steps can significantly improve the quality of life for those affected by this chronic disease.",
    symptomsParagraph: "Asthma symptoms can vary widely from person to person and may change over time. Common symptoms include:",
    symptoms: [
      "Shortness of breath",
      "Chest tightness or pain",
      "Wheezing (a whistling sound when breathing)",
      "Coughing, especially at night or early morning",
      "Difficulty sleeping due to breathing problems"
    ],
    causesParagraph: "The exact cause of asthma is not fully understood, but it is believed to be a combination of genetic and environmental factors. Key causes include:",
    causes: [
      "Genetic predisposition: Family history of asthma or other allergic conditions.",
      "Environmental triggers: Exposure to allergens (such as pollen, dust mites, pet dander, or mold), air pollutants, tobacco smoke, and occupational irritants.",
      "Respiratory infections: Early childhood infections affecting the respiratory system.",
      "Lifestyle factors: Obesity and lack of physical activity."
    ],
    riskFactorParagraph: "Several factors can increase the likelihood of developing asthma, including:",
    riskFactors: [
      "Family history: Having a parent with asthma.",
      "Allergies: Conditions like hay fever or eczema.",
      "Obesity: Being overweight can increase the risk and severity of asthma.",
      "Smoking: Both smoking and exposure to secondhand smoke.",
      "Air pollution: Living in areas with high levels of pollution.",
      "Occupational exposures: Jobs that involve exposure to chemicals, dust, or fumes."
    ],
    complicationText: "Asthma can lead to several complications if not properly managed:",
    complications: [
      "Frequent hospitalizations: Severe asthma attacks may require emergency treatment or hospital stays.",
      "Permanent airway changes: Chronic inflammation can lead to structural changes in the airways, reducing lung function.",
      "Side effects from medication: Long-term use of some asthma medications can have side effects.",
      "Reduced quality of life: Chronic symptoms can interfere with daily activities, work, and sleep.",
      "Mental health issues: Anxiety and depression due to the chronic nature of the disease."
    ],
    prevention: [
      "Avoiding triggers: Identifying and avoiding allergens and irritants.",
      "Managing allergies: Treating and controlling allergic conditions effectively.",
      "Healthy lifestyle: Maintaining a healthy weight, regular exercise, and a balanced diet.",
      "No smoking: Avoiding tobacco smoke and other pollutants.",
      "Vaccinations: Keeping up with vaccinations, especially for influenza and pneumonia, to prevent respiratory infections."
    ],
    preventionText: "While asthma cannot be completely prevented, certain measures can help reduce the risk of developing the condition or experiencing severe symptoms."
  },
  {
    title: "Covid-19",
    generalInfo: "COVID-19 is a highly contagious disease caused by the novel coronavirus SARS-CoV-2. First identified in December 2019 in Wuhan, China, COVID-19 has led to a global pandemic, affecting millions of people worldwide. The disease primarily spreads through respiratory droplets and has a wide range of severity, from mild symptoms to severe respiratory illness and death.",
    generalInfo2: "COVID-19 remains a significant global health challenge. Continued vigilance in preventive measures, widespread vaccination, and adherence to public health guidelines are crucial in managing and eventually overcoming the pandemic. Individuals should stay informed about the latest recommendations from health authorities and take proactive steps to protect themselves and their communities.",
    symptomsParagraph: "COVID-19 symptoms can appear 2-14 days after exposure to the virus and vary from mild to severe. Common symptoms include:",
    symptoms: [
      "Fever or chills",
      "Cough",
      "Shortness of breath or difficulty breathing",
      "Fatigue",
      "Muscle or body aches",
      "Headache",
      "No loss of taste or smell",
      "Sore throat",
      "Congestion or runny nose",
      "Nausea or vomiting",
      "Diarrhea"
    ],
    causesParagraph: "COVID-19 is caused by the SARS-CoV-2 virus, which is primarily transmitted through:",
    causes: [
      "Respiratory droplets: When an infected person coughs, sneezes, talks, or breathes.",
      "Airborne transmission: Small virus particles that linger in the air, especially in enclosed spaces with poor ventilation.",
      "Surface transmission: Touching surfaces or objects contaminated with the virus, and then touching the face (though this is less common)."
    ],
    riskFactorParagraph: "Certain factors increase the likelihood of severe illness from COVID-19, including:",
    riskFactors: [
      "Family history: Having a parent with asthma.",
      "Allergies: Conditions like hay fever or eczema.",
      "Obesity: Being overweight can increase the risk and severity of asthma.",
      "Smoking: Both smoking and exposure to secondhand smoke.",
      "Air pollution: Living in areas with high levels of pollution.",
      "Occupational exposures: Jobs that involve exposure to chemicals, dust, or fumes."
    ],
    complicationText: "COVID-19 can lead to a variety of complications, some of which may be severe or long-term:",
    complications: [
      "Pneumonia and acute respiratory distress syndrome (ARDS)",
      "Organ damage: Including heart, liver, and kidneys.",
      "Blood clots: Increasing the risk of strokes and other clot-related complications.",
      "Multisystem inflammatory syndrome in children (MIS-C): A rare but serious condition.",
      "Long COVID: Persistent symptoms lasting weeks or months after the initial infection, such as fatigue, cognitive issues, and respiratory problems.",
      "Secondary infections: Increased risk of bacterial or fungal infections due to weakened immune responses."
    ],
    prevention: [
      "Vaccination: Getting vaccinated and receiving booster doses as recommended.",
      "Mask-wearing: Using masks, especially in indoor public spaces or when social distancing is not possible.",
      "Hand hygiene: Regular handwashing with soap and water or using hand sanitizer with at least 60% alcohol.",
      "Social distancing: Keeping a safe distance from others, particularly those not in your household.",
      "Avoiding crowds and poorly ventilated spaces: Staying away from large gatherings and ensuring good ventilation in indoor settings.",
      "Testing and isolation: Regular testing, particularly if symptomatic or exposed, and isolating if infected or symptomatic."
    ],
    preventionText: "Preventive measures to reduce the spread of COVID-19 include:"
  },
  {
    title: "Whooping Cough (Pertussis)",
    generalInfo: "Whooping cough, also known as pertussis, is a highly contagious respiratory disease caused by the bacterium Bordetella pertussis. It is known for uncontrollable, violent coughing which often makes it hard to breathe. The name \"whooping cough\" comes from the sound that sufferers often make when they try to breathe in after a coughing fit. Pertussis can affect individuals of all ages but is particularly severe in infants and young children.",
    generalInfo2: "Whooping cough remains a significant health concern, particularly for infants and young children who are not fully vaccinated. Awareness of symptoms, timely vaccination, and adherence to preventive measures are crucial in controlling the spread of pertussis. Early diagnosis and treatment can help manage symptoms and reduce the risk of severe complications. Public health efforts continue to focus on vaccination and education to prevent outbreaks and protect vulnerable populations.",
    symptomsParagraph: "Whooping cough typically develops in stages, with symptoms evolving over time. The disease usually progresses through three phases:",
    symptoms: [
      "1. Catarrhal Stage (1-2 weeks)\n- Symptoms similar to the common cold: runny nose, sneezing, mild cough, low-grade fever.\n Highly contagious at this stage.",
      "2. Paroxysmal Stage (1-6 weeks)\n- Severe coughing fits followed by a high-pitched \"whoop\" sound.\n Vomiting and exhaustion may follow the coughing fits.",
      "3. Convalescent Stage (weeks to months)\n- Gradual recovery with less severe coughing fits.\n Susceptibility to other respiratory infections may be increased."
    ],
    causesParagraph: "Whooping cough is caused by Bordetella pertussis, a bacterium that attaches to the lining of the respiratory tract, releasing toxins that damage the tissues and cause inflammation. The disease is spread through respiratory droplets when an infected person coughs or sneezes.",
    causes: [
      
    ],
    riskFactorParagraph: "Certain factors can increase the risk of contracting whooping cough, including:",
    riskFactors: [
      "Age: Infants and young children are at highest risk, especially those who are not fully vaccinated.",
      "Vaccination status: Lack of vaccination or incomplete vaccination increases susceptibility.",
      "Close contact: Living with or caring for an infected person.",
      "Community outbreaks: Increased risk in areas with high pertussis activity."
    ],
    complicationText: "Whooping cough can lead to serious complications, especially in infants and young children:",
    complications: [
      "Pneumonia: The most common secondary infection.",
      "Apnea: Breathing pauses in infants.",
      "Convulsions: Due to severe coughing fits.",
      "Encephalopathy: Brain damage from lack of oxygen or toxins.",
      "Rib fractures: From severe coughing.",
      "Death: Particularly in infants less than six months old."
    ],
    prevention: [
      "Vaccination: The DTaP vaccine (diphtheria, tetanus, and acellular pertussis) is recommended for infants and children, while the Tdap booster is recommended for adolescents and adults.",
      "Pregnant women: A Tdap booster during each pregnancy to protect newborns.",
      "Good hygiene: Regular handwashing, using tissues or elbow to cover mouth when coughing or sneezing, and avoiding close contact with infected individuals.",
      "Early treatment: Prompt treatment of infected individuals to reduce transmission."
    ],
    preventionText: "Preventing whooping cough primarily involves vaccination and good hygiene practices:"
  },
  {
    title: "Influenza (Flu)",
    generalInfo: "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses. It affects the nose, throat, and sometimes the lungs. The flu can cause mild to severe illness, and in some cases, it can lead to death. Seasonal flu epidemics occur annually, typically in the fall and winter months, and can affect people of all ages.",
    generalInfo2: "Influenza remains a significant public health challenge due to its high contagiousness and potential for severe complications. Annual vaccination, good hygiene practices, and public health measures are key to preventing the spread of the flu. Early detection and appropriate treatment can reduce the severity of symptoms and prevent complications. Public awareness and vaccination campaigns are essential in reducing the impact of seasonal flu epidemics.",
    symptomsParagraph: "Flu symptoms usually come on suddenly and can include:",
    symptoms: [
      "Fever or feeling feverish/chills",
      "Cough",
      "Sore throat",
      "Runny or stuffy nose",
      "Muscle or body aches",
      "Headaches",
      "Fatigue (tiredness)",
      "Some people may have vomiting and diarrhea, though this is more common in children than adults."
    ],
    causesParagraph: "Influenza is caused by infection with influenza viruses, which are classified into four types: A, B, C, and D. Human influenza A and B viruses cause seasonal epidemics. The virus spreads mainly by droplets made when people with flu cough, sneeze, or talk. It can also spread by touching a surface or object that has the virus on it and then touching one's own mouth, nose, or eyes.",
    causes: [
      
    ],
    riskFactorParagraph: "Factors that can increase the risk of developing the flu or having severe complications include:",
    riskFactors: [
      "Age: Infants, young children, and older adults are at higher risk.",
      "Chronic medical conditions: Such as asthma, diabetes, heart disease, and weakened immune systems.",
      "Pregnancy: Pregnant women are more susceptible to severe illness.",
      "Living or working conditions: Residents of nursing homes, healthcare workers, and people in close contact settings.",
      "Obesity: Especially individuals with a body mass index (BMI) of 40 or higher."
    ],
    complicationText: "Influenza can lead to serious complications, especially in high-risk groups. Common complications include:",
    complications: [
      "Pneumonia: A serious lung infection that can be viral or secondary bacterial.",
      "Bronchitis: Inflammation of the bronchial tubes.",
      "Sinus and ear infections: Can occur following the flu.",
      "Exacerbation of chronic conditions: Such as asthma attacks, worsening heart disease, or diabetes management issues.",
      "Sepsis: A severe and potentially life-threatening response to infection.",
      "Death: Particularly among high-risk groups like the elderly and those with underlying health conditions."
    ],
    prevention: [
      "Vaccination: Annual flu vaccines are the most effective way to prevent the flu. Vaccines are updated each year to protect against the most common strains.",
      "Good hygiene practices: Regular handwashing with soap and water, using hand sanitizer, and avoiding touching the face.",
      "Covering coughs and sneezes: Using tissues or the inside of the elbow.",
      "Avoiding close contact with sick people: Staying away from those who are infected.",
      "Staying home when sick: To prevent spreading the flu to others.",
      "Healthy lifestyle: Maintaining a healthy diet, regular exercise, and sufficient sleep to strengthen the immune system."
    ],
    preventionText: "Preventive measures for influenza include:"
  },
  {
    title: "Pneumonia",
    generalInfo: "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, causing symptoms such as a cough with phlegm or pus, fever, chills, and difficulty breathing. A variety of organisms, including bacteria, viruses, and fungi, can cause pneumonia. It ranges in seriousness from mild to life-threatening and is most serious for infants, young children, older adults, and people with underlying health conditions.",
    generalInfo2: "Pneumonia is a significant health concern that can range from mild to life-threatening. Awareness of the symptoms, causes, and risk factors is crucial for early detection and treatment. Preventive measures such as vaccination, good hygiene practices, and maintaining a healthy lifestyle are key in reducing the risk of pneumonia. Prompt medical attention and appropriate treatment can help manage symptoms and prevent complications, improving outcomes for those affected by this condition.",
    symptomsParagraph: "The symptoms of pneumonia can vary from mild to severe, depending on factors such as the type of germ causing the infection, age, and overall health. Common symptoms include:",
    symptoms: [
      "Chest pain when breathing or coughing",
      "Confusion or changes in mental awareness (in adults age 65 and older)",
      "Cough, which may produce phlegm",
      "Fatigue",
      "Fever, sweating, and shaking chills",
      "Lower than normal body temperature (in adults older than age 65 and people with weak immune systems)",
      "Nausea, vomiting, or diarrhea",
      "Shortness of breath"
    ],
    causesParagraph: "Pneumonia can be caused by a variety of infectious agents, including bacteria, viruses, and fungi. The most common types of pneumonia are:",
    causes: [
      "Bacterial pneumonia: The most common cause is Streptococcus pneumoniae.",
      "Viral pneumonia: Caused by respiratory viruses, including influenza and respiratory syncytial virus (RSV).",
      "Mycoplasma pneumonia: Caused by Mycoplasma pneumoniae, which is less severe but can last longer.",
      "Fungal pneumonia: Caused by fungi from soil or bird droppings, more common in people with chronic health problems or weakened immune systems.",
      "Aspiration pneumonia: Caused by inhaling food, drink, vomit, or saliva into the lungs."
    ],
    riskFactorParagraph: "Several factors can increase the risk of developing pneumonia, including:",
    riskFactors: [
      "Age: Infants and young children, as well as people older than age 65.",
      "Chronic disease: Conditions such as asthma, chronic obstructive pulmonary disease (COPD), and heart disease.",
      "Weakened immune system: Due to conditions such as HIV/AIDS, cancer treatment, or organ transplants.",
      "Smoking: Damages the body’s natural defenses against the bacteria and viruses that cause pneumonia.",
      "Hospitalization: Particularly if on a ventilator.",
      "Recent respiratory infection: Such as a cold or influenza."
    ],
    complicationText: "Pneumonia can lead to several serious complications, especially in high-risk groups. These complications include:",
    complications: [
      "Bacteremia: Bacteria from the infection spreading into the bloodstream, which can lead to septic shock.",
      "Lung abscesses: Pockets of pus that form in the lung.",
      "Pleural effusion: Fluid accumulation between the layers of tissue that line the lungs and chest cavity.",
      "Respiratory failure: Severe cases may require mechanical ventilation.",
      "Acute respiratory distress syndrome (ARDS): A severe form of respiratory failure."
    ],
    prevention: [
      "Vaccination: Vaccines are available to prevent some types of pneumonia and the flu. It is important for children, older adults, and people with certain health conditions to be vaccinated.",
      "Good hygiene: Regular handwashing and respiratory hygiene (covering mouth and nose when coughing or sneezing).",
      "Healthy lifestyle: Eating a healthy diet, regular exercise, and avoiding smoking.",
      "Avoiding sick people: Keeping distance from those who are ill, especially during flu season.",
      "Managing chronic conditions: Proper management of chronic diseases to keep the immune system strong."
    ],
    preventionText: "Preventive measures to reduce the risk of pneumonia include:"
  },
  {
    title: "Diabetes Mellitus (Diabetes)",
    generalInfo: "Diabetes mellitus is a chronic condition that affects how your body turns food into energy. There are three main types: Type 1, Type 2, and gestational diabetes. Diabetes occurs when blood glucose, also known as blood sugar, is too high. Insulin, a hormone produced by the pancreas, helps glucose from food get into your cells to be used for energy. In diabetes, the body either doesn’t make enough insulin or can’t use it as well as it should, causing glucose to stay in the blood.",
    generalInfo2: "Diabetes is a complex, chronic condition that requires ongoing medical attention and self-management to prevent complications. Awareness of risk factors and symptoms, along with adopting a healthy lifestyle, can help manage and reduce the risk of diabetes. Regular monitoring and early detection are crucial for effective management and improving the quality of life for those with diabetes.",
    symptomsParagraph: "Symptoms of diabetes vary depending on how much your blood sugar is elevated. Common symptoms include:",
    symptoms: [
      "Increased thirst",
      "Frequent urination",
      "Extreme hunger",
      "Unexplained weight loss",
      "Presence of ketones in the urine (ketones are a byproduct of the breakdown of muscle and fat that happens when there’s not enough insulin)",
      "Fatigue",
      "Irritability",
      "Blurred vision",
      "Slow-healing sores",
      "Frequent infections, such as gums or skin infections and vaginal infections"
    ],
    causesParagraph: "The causes of diabetes vary by type:",
    causes: [
      "Type 1 Diabetes: An autoimmune condition where the immune system attacks insulin-producing beta cells in the pancreas. The exact cause is unknown, but it may involve genetic and environmental factors.",
      "Type 2 Diabetes: Develops when the body becomes resistant to insulin or when the pancreas can’t produce enough insulin. Factors include genetics and lifestyle influences such as being overweight and inactive.",
      "Gestational Diabetes: Occurs during pregnancy and is due to the body’s inability to make and use all the insulin it needs for pregnancy. Hormones from the placenta contribute to insulin resistance."
    ],
    riskFactorParagraph: "Risk factors vary for the different types of diabetes:",
    riskFactors: [
      "Type 1 Diabetes:",
      "o Family history of diabetes",
      "o Genetic predisposition",
      "o Possibly environmental factors and viral infections",
      "Type 2 Diabetes:",
      "o Overweight or obesity",
      "o Physical inactivity",
      "o Family history of diabetes",
      "o Age (45 years and older)",
      "o Ethnicity (higher risk among African Americans, Hispanic/Latino Americans, Native Americans, and Asian Americans)",
      "o History of gestational diabetes",
      "o High blood pressure and abnormal cholesterol levels",
      "Gestational Diabetes:",
      "o Overweight or obesity",
      "o Family history of diabetes",
      "o Age (older than 25)",
      "o Previous birth of a baby weighing more than 9 pounds",
      "o Polycystic ovary syndrome (PCOS)"
    ],
    complicationText: "Diabetes complications can be severe and include:",
    complications: [
      "Cardiovascular disease: Increased risk of heart attack, stroke, and narrowing of arteries.",
      "Nerve damage (neuropathy): High blood sugar can injure nerves throughout the body, leading to numbness, pain, and issues with digestion.",
      "Kidney damage (nephropathy): Diabetes can damage the kidneys' filtering system, potentially leading to kidney failure.",
      "Eye damage (retinopathy): Risk of blindness due to damage to the blood vessels of the retina.",
      "Foot damage: Poor blood flow and nerve damage can cause severe foot infections.",
      "Skin conditions: Higher susceptibility to bacterial and fungal infections.",
      "Hearing impairment: Higher incidence of hearing problems.",
      "Alzheimer’s disease: Type 2 diabetes may increase the risk of dementia and Alzheimer’s."
    ],
    prevention: [
      "Healthy diet: Focus on foods high in fiber and low in fat and calories, such as fruits, vegetables, and whole grains.",
      "Regular physical activity: Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week.",
      "Weight management: Maintaining a healthy weight or losing weight if overweight.",
      "Regular monitoring: Regular check-ups and screenings for those at risk.",
      "Avoiding tobacco use: Smoking increases the risk of diabetes and its complications."
    ],
    preventionText: "Preventing diabetes, particularly Type 2 and gestational diabetes, involves lifestyle changes:"
  },
];

const HealthConditions = () => {
  return (
    <div>
      {healthConditionsData.map((condition, index) => (
        <section key={index}>
          <h1 id={`heading${condition.title}`} className="block font-sans text-5xl font-semibold leading-tight tracking-normal text-inherit ml-20px">{condition.title}</h1>
          <hr id='hr' className="h-2 border-t-4 border-[#627254] my-2" />
          
          <section className='hcMainContainer w-full flex flex-row'>  
            <div className='hcLeftChildCon w-1/2 mx-5 my-2'>
              <h2 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit">General Information:</h2>
              <p>{condition.generalInfo}</p>
              <br></br>
              <p>{condition.generalInfo2}</p>
              <h2 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit">Symptoms</h2>
              <p>{condition.symptomsParagraph}</p>
              <ul className="list-disc ml-5 marker:text-[#627254]">
                {condition.symptoms.map((symptom, i) => (
                  <li key={i}>{symptom}</li>
                ))}
              </ul>
              <h2 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit">Causes</h2>
              <p>{condition.causesParagraph}</p>
              <ul className="list-disc ml-5 marker:text-[#627254]">
                {condition.causes.map((cause, i) => (
                  <li key={i}>{cause}</li>
                ))}
              </ul>
              <h2 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit">Risk Factors</h2>
              <p>{condition.riskFactorParagraph}</p>
              <ul className="list-disc ml-5 marker:text-[#627254]">
                {condition.riskFactors.map((riskFactor, i) => (
                  <li key={i}>{riskFactor}</li>
                ))}
              </ul>
              <h2 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit">Complications</h2>
              <p>{condition.complicationText}</p>
              <ul className="list-disc ml-5 marker:text-[#627254]">
                {condition.complications.map((complication, i) => (
                  <li key={i}>{complication}</li>
                ))}
              </ul>
            </div>

            <div className='hcRightChildCon flex flex-col w-1/2 mx-5 my-2 justify-center items-center'>
              <div className='selfDiagnosisContainer flex flex-col justify-center items-center text-center w-72 mb-2'>
                <h2 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit">Try Self Diagnosis</h2>
                <p>Still not sure of what condition you are experiencing? you can try our Self Diagnosis Tool!</p>
                <Link to='/self-diagnosis'>
                  <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded">Self Diagnosis</Button>
                </Link>
              </div>

              <div className='checkHospitalsContainer flex flex-col justify-center items-center text-center w-72 mb-2'>
                <h2 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-inherit">Want to see a doctor?</h2>
                <p>Want to see a doctor? Click the button below to choose a hospital and schedule an appointment now.</p>
                <Link to='/hospitals'>
                  <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded">Check our Hospitals</Button>
                </Link>
              </div>

              <div className='preventionContainer w-96 h-100 bg-[#627254] text-white p-5 border-4 border-[#76885B] rounded-lg'>
                <h3 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-inherit">Prevention</h3>
                <p>{condition.preventionText}</p>
                <p>Consider these tips:
                  <ul className="list-disc ml-5">
                    {condition.prevention.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </section>
        </section>
      ))}
    </div>
  );
}

export default HealthConditions;
