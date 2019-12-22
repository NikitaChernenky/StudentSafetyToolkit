#       StudentSafetyToolkit
Student Safety Toolkit (SST) is the application made strictly for the University of Regina students. The goal is to provide students with all necessary tools to maintain safety as the number one priority. This application is supported by iOS and Android mobile devices. Student Safety Toolkit is free to use and will be available to download on the App Store. The application has the following five tabs: Report Incident, Instant Risk Assessment, Contacts, Safety Reminder, and Links. <br />
The application is developed  using Ionic and Angular platform and Capacitor API. <br />

### Plugins used: <br />
 - Email Composer<br />
 - Document Viewer<br />
 - Storage File<br />
 - File Transfer<br />
 - Ionic v2 Calendar<br />
 - SQLite <br />
 
 ## Sections
 
### Report Incident

Report Incident feature enables students to submit immediate incident reports. It provides students with the information about different types of incidents and how they should be handled. The students are prompted to select the type of incident and fill out an incident report form. The form  will then be emailed directly to Science Operations and Health, Safety and Wellness Coordinator. Students can also include photos of the incident as an attachment to the email.

 ![App Info](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/ri2.png) 
 ![App Info](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/ri3.png) 

### Risk Assessment

Risk Assessment feature allows  students to assess the risk of certain actions they perform. For example, a chemistry student wants to perform a chemical experiment, through Risk Assessment they become aware of potential hazards and risks they could be exposed to.
As shown in Fig. \ref{fig:selectseverity}, the risks are divided into 4 levels of severity: minor, significant, major, and extreme. 
The risk assessment is done using the provided Risk Assessment Chart that takes into account severity and probability of an event occurring. Once the severity is selected, the application provides user with instructions on how to proceed if the event occurs.

 ![App Info](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/ra1.png) 
 ![App Info](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/ra2.png) 


### Links

This page contains important links to safety documents available on the University of Regina website. The Links page provides students with immediate access to lab safety manuals, Health and Wellness documents, Vertere (UofR chemical database), fire escape plans and other useful safety documents. 

 ![App Info](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/links.png) 

### Contacts

This page provides students with safety and emergency contact information. Students are able to simply click on the desired emergency phone number and be presented with the option to call. Students are also provided with an option to send email to the selected department.

 ![App Info](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/contacts.png) 

### Safety Calendar

The Safety Calendar feature allows students to set reminder notifications. These reminders can be used to remind students to follow certain safety activities (ex.eyewash flush). The events can be set to recur weekly, bi-weekly and monthly. 

 ![App Info](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/calendar.png) 

### Disclaimer Page

Since the application will contain the University of Regina licensed documents, it must have a disclaimer page. The disclaimer page prompts the user to agree to the terms and conditions before using the application. The disclaimer page will only show on the first load. Once the user accepts terms and conditions, the page will never show again.

 ![Disclaimer](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/Disclaimer.png) 


## Plugins

I have used numerous Cordova plugins, such as **Email Composer, Document Viewer, Storage, File Transfer, Calendar,** and **SQLite**. All of the listed plugins play a crucial role in the application's functionality.
The **Email Composer** plugin provides access to the API that handles data binding and sending an email. It allows the user to open their native email application and prepopulate email fields, such as the recipients, subject, and body. Once the email window opens, the user is allowed to edit the content of email and add attachments to it. The plugin is used on the Report Incident and Contacts page. Tthe user is required to fill out the form to submit a report. Once the form is submitted, the Email Composer plugin stores the entered information via two-way data binding angular feature. The information is then used to populate email fields in the opened Email application.
Some of the UofR safety documents are not publicly available on the university's website. In order to access such documents, the students would need:


- Network connectivity
- Sign into the university's website
- Find the document

This above process is timely and inconvenient. Also, if the user does not have network access, they will not be able to access the desired safety document. In order to solve the above issue, I decided to store the safety documents locally within the application. In order to internally store the files, I used the **Storage** Cordova plugin.
The **Document Viewer** plugin enables the user to open the desired safety document within the application. Once the document is opened, the user can scroll through pages and zoom in and out. Not only does it provide user with a PDF viewer functionality, it also allows the user to share, print and save the document.
In order to enable users to create safety reminders, I added the Safety Calendar using **Ionic Calendar** plugin. The plugin provides a responsive calendar UI layout along with a standard calendar functionality. The calendar supports 3 different views: day, week and month. It allows the user to create safety reminders. The reminders can be set to recur daily, weekly and monthly.
In order to manage the calendar data, I used the **SQLite** Cordova plugin. The **SQLite** plugin provides the basic database functionality. The calendar queries the database table to retain and write the data. 

## Navigation
The flowchart below depicts the navigation hierarchy of the application. 
 ![Disclaimer](https://github.com/NikitaChernenky/StudentSafetyToolkit/blob/master/chart.png) 
