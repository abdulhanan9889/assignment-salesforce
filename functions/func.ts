
function randomEmailGenerator(){
    let chars1 = 'abcdefghijklmnopqrstuvwxyz';
    let chars2=  '1234567890';
    let string1 = '';
    let string2=  '';
    for(var i=0; i<7; i++){
        string1 += chars1[Math.floor(Math.random() * chars1.length)];
        string2 += chars2[Math.floor(Math.random() * chars2.length)];
    }
    return(string1+string2+"@mailinator.com");
    } 

function profileUrlGenerator(){
    let string1 = 'Carl';
    let chars2=  '1234567890';
    let string2=  '';
    for(var i=0; i<7; i++){
        string2 += chars2[Math.floor(Math.random() * chars2.length)];
    }
    return(string1+string2 );
    } 

    export async function gotoSalesForcePlus(page)
    {
        await page.goto('https://www.salesforce.com/plus/');
        await page.setViewport({width:1366,height:768})
    }

    export async function clickDreamForceButton(page)
    {
        await page.waitForSelector('shadow/a[href="/plus/experience/Dreamforce_2021"]', {visible: true, timeout: 30000 });
        const dreamForceIcon= await page.$('shadow/a[href="/plus/experience/Dreamforce_2021"]');
        await dreamForceIcon.click();
    }
    
    export async function clickWatchNowButton(page)
    {
        await page.waitFor(5000);
        await page.waitForSelector('shadow/a[href="/plus/experience/Dreamforce_2021/series/Best_of_DF/episode/episode-2"]', {visible: true, timeout: 3000 });
        const WatchNowIcon = await page.$('shadow/a[href="/plus/experience/Dreamforce_2021/series/Best_of_DF/episode/episode-2"]');
        await WatchNowIcon.click();
    }

    export async function clickLogInButton(page)
    {
        // console.log('clickLogIn');
        await page.waitFor(5000);
        await page.waitForSelector('shadow/a[href="/a/auth"] .link-content', {visible: true, timeout: 3000 });
        const LogInBtn = await page.$('shadow/a[href="/a/auth"] .link-content');
        await LogInBtn.click();
    }

    export async function clickEmailButton(page)
    {
        await page.waitFor(3000);
        await page.waitForSelector('#loginPage\\:j_id61 button[aria-label="Email"]',{visible:true});
        const EmailButton = await page.$('#loginPage\\:j_id61 button[aria-label="Email"]');
        await EmailButton.click();
    }

    export async function typeEmail(randomEmail,page)
    {
        await page.waitForSelector('#loginPage\\:email-card-form\\:emailTextInput',{visible:true});
        const typeEmail = await page.$('#loginPage\\:email-card-form\\:emailTextInput');
        await typeEmail.type((randomEmail+'@mailinator.com'));
    }

    export async function submitEmail(page)
    {
        await page.waitForSelector('#submit-email',{visible:true});
        const submitEmailBtn = await page.$('#submit-email');
        await submitEmailBtn.click();
    }

    export async function typeCode(code,page)
    {
        await page.waitForSelector('#loginPage\\:email-card-form\\:challengeTextInput',{visible:true,timeout:3000});
        const codeField = await page.$('#loginPage\\:email-card-form\\:challengeTextInput');
        await codeField.type(code);
    }

    export async function submitCode(page)
    {
        const submitCodeBtn = await page.$('#loginPage\\:email-card-form\\:verifyChallengeButton');
        await submitCodeBtn.click();
    }

    export async function clickSignUpButton(page)
    {
        await page.waitForSelector(`input[name="loginPage:email-card-form:j_id119"]`,{visible:true,timeout:3000});
        const signUpBtn = await page.$(`input[name="loginPage:email-card-form:j_id119"]`);
        await signUpBtn.click();
    }

    async function firstName(firstName,page)
    {
        await page.waitForSelector(`input[id*="inputFirstName"]`,{visible:true,timeout:3000})
        const firstNameField = await page.$('input[id*="inputFirstName"]');
        await firstNameField.type(firstName);
    }

    async function lastName(lastName,page)
    {
        const lastNameField = await page.$('input[id*="inputLastName"]');
        await lastNameField.type(lastName);
    }

    async function typeProfileUrl(profileUrle,page)
    {
        const profileUrlField = await page.$('input[id*="inputProfileUrl"]');
        await profileUrlField.type(profileUrle);

    }
    
    async function nextButton(page)
    {
        const nextButton = await page.$(`#progressive-card input[type="submit"]`);
        await nextButton.click();
    }

    export async function fillFirstForm(dataTable,page)
    {
        let c= dataTable.rowsHash(); 

        await page.waitFor(10000);
        
        await firstName(c.firstName,page);

        await lastName(c.lastName,page);

        const profileUrl=profileUrlGenerator();
        await typeProfileUrl(profileUrl,page);
        
        await nextButton(page);
    }

     async function companyNameField(companyName,page)
    {
        await page.waitForSelector(`input[id*="inputCompanyName"]`,{visible:true,timeout:3000})
        const companyNameField = await page.$('input[id*="inputCompanyName"]');
        await companyNameField.type(companyName);
    }

     async function dropDownRole(jobRole,page)
    {
        const dropDownRole = await page.$(`select[id*="inputRoleName"]`);
        await dropDownRole.select(jobRole);
    }
    
     async function typeJobTitle(jobTitle,page)
    {
        const typeJobTitle = await page.$(`input[id*="inputTitle"]`);
        await typeJobTitle.type(jobTitle);
    }

     async function dropDownRelationship(relationship,page)
    {
        const dropDownRelationship = await page.$(`select[id*="Relationship"]`);
        await dropDownRelationship.select(relationship);        
    }

     async function typeCountryName(countryName,page)
    {
        const countryNameField = await page.$(`select[id*="inputCountry"]`);
        if(countryName!="US")
         {       
            await countryNameField.select(countryName);
         }

    }

     async function typeStateField(state,countryName,page)
    {
        const stateField = await page.$('select[id*="inputState"]');
        if(countryName=="US")
        {  
            await stateField.select(state);
        }
    }

     async function clickCheckBoxButton(page)
    {
        await page.waitForSelector(`#tos-checkbox`,{visible:true,timeout:3000});
        const checkCheckBox = await page.$(`#tos-checkbox`);
        checkCheckBox.click();
    }

     async function clickDoneButton(page)
    {
        const doneButton = await page.$(`input[name*="progressive-card-form"][type="submit"]`);
        await doneButton.click();
    }

    export async function fillSecondForm(dataTable,page){
        let b=dataTable.rowsHash();
        await page.waitFor(8000);
        

        await companyNameField(b.companyName,page);

        await typeJobTitle(b.jobTitle,page);
        
        await dropDownRole(b.jobRole,page);

        await dropDownRelationship(b.relationship,page);
        
        await typeCountryName(b.countryName,page);
    
        await typeStateField(b.State,b.countryName,page);

        await page.waitFor(10000);

        await clickCheckBoxButton(page);

        await page.waitFor(5000);

        await clickDoneButton(page);

        console.log("Proceed");
    }

    async function 
    typeWorkEmail(page)
    {
        await page.waitForSelector(`shadow/input[aria-label*="Work Email"]`,{visible:true,timeout:3000});
        const workEmailField = await page.$(`shadow/input[aria-label*="Work Email"]`);
        await workEmailField.type(randomEmailGenerator());
    }

    async function typeWorkPhone(workPhone,page)
    {
        const workPhoneField = await page.$(`shadow/input[aria-label*="Work Phone"]`);
        await workPhoneField.type(workPhone);
    }
    
    async function selectCompanySize(companySize,page)
    {
        const companySizeOption = await page.$(`shadow/select[aria-label*="Company Size"]`);
        await companySizeOption.select(companySize);
    }
    
    async function selectMembershipDropDownJobRole(jobRole,page)
    {
        const membershipDropDownJobRole = await page.$(`shadow/select[aria-label*="Job Role"]`);
        await membershipDropDownJobRole.select(jobRole);
    }

    async function clickCheckBoxForSharingInfoWithDreamForce(page)
    {
        const checkAcknowledgement1 = await page.$(`shadow/div.login__checkbox input[type="checkbox"]`);
        await checkAcknowledgement1.click();
    }

    async function clickCheckBoxForSharingInfoWithSlack(page)
    {
        const checkAcknowledgement2 = await page.$(`shadow/div.login__checkbox.slack input[type="checkbox"]`);
        await checkAcknowledgement2.click();
    }
    
    async function clickCompleteMemebershipButton(page)
    {
        const completeMemebershipButton = await page.$(`shadow/button.text-button.bxp-global-cta.--primary`);
        await completeMemebershipButton.click();
    }

    export async function membershipCompeletion(dataTable,page)
    {
        let k=dataTable.rowsHash();

        await page.waitFor(20000);
        
        await typeWorkEmail(page);

        await typeWorkPhone(k.workPhone,page);

        await selectCompanySize(k.companySize,page);

        await selectMembershipDropDownJobRole(k.jobRole,page);
        
        await clickCheckBoxForSharingInfoWithDreamForce(page);//change check

        await clickCheckBoxForSharingInfoWithSlack(page);//change

        await clickCompleteMemebershipButton(page);

    }

    export async function playVideo(page)
    {
        //   await page.goto('https://www.salesforce.com/plus/');
        //   await page.waitForSelector('shadow/body > div.section.target.parbase > salesforceplus-app div > salesforceplus-router div > bxp-modal > bxp-auth-flow div > span > img',{visible:true, timeout:3000});
          await page.waitFor(1000);//salesforceplus-router div > bxp-modal > 
        //   await page.waitForSelector('shadow/div.card-title',{visible:true, timeout:3000});
        //   const card = await page.$('shadow/div.card-title');
        //   await card.hover();
          await page.waitFor(5000);
        //   await page.click('shadow/bxp-icon-button.play-button');                         //'div > div > div > div.login__header > span');
        //   await page.waitFor(5000);

        const frameHandle = await page.$(`shadow/iframe[allow="autoplay; fullscreen; picture-in-picture; camera; microphone; display-capture"]`);

          const frame = await frameHandle.contentFrame();
        await frame.waitForSelector('button._1rX1_');
        const btn = await frame.$('button._1rX1_');
        await btn.click();
        

         const pauseBtn = await page.$('shadow/button[aria-label="play / pause button"]')
    await page.waitFor(10000);
    await pauseBtn.click();
    await pauseBtn.click();






          //   await page.click('shadow/bxp-auth-flow div > span > img[alt="close icon"]');                         //'div > div > div > div.login__header > span');
    // console.log('close button pressed');

    // const frameHandle = await page.$(`shadow/iframe[allow="autoplay; fullscreen; picture-in-picture; camera; microphone; display-capture"]`);

    // const frame = await frameHandle.contentFrame();
    // await frame.waitForSelector('button._1rX1_');
    // const btn = await frame.$('button._1rX1_');

    // //  const btn = await page.$('shadow/button[aria-label="play / pause button"]')
    // await page.waitFor(5000);
    // await btn.click();

    // const playButtonHandle = await page.evaluateHandle(() => {
    //     return document?.querySelector("body > div.section.target.parbase > salesforceplus-app")?.shadowRoot?.querySelector("div > salesforceplus-router")?.shadowRoot?.querySelector("div > main > salesforceplus-view")?.shadowRoot?.querySelector("div > div.player-container > div > bxp-vidyard-player")?.shadowRoot?.querySelector('button[aria-label="play / pause button"]');      
    //   });

    //   const playButton= await playButtonHandle.asElement();

    //   await playButton.click();
    }