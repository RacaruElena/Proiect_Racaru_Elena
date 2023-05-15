Racaru Elena-Andreea

Aplicație pentru realizarea unei programări într-o clinică medicală
Link către aplicația publicată prin intermediul Vercel: https://proiect-racaru-elena.vercel.app/
Link către prezentarea video: https://youtu.be/cnu9WMrVWKI
Descriere problemă
Scopul aplicației este de a permite pacienților să realizeze programări la clinică medicală Elicover în mod eficient și convenabil. Aplicația ar putea fi utilizată de pacienți pentru a programa o consultație cu un medic, a verifică disponibilitatea programărilor și a putea anula o programare.
De asemenea, o astfel de aplicație ar putea fi utilizată de personalul clinic pentru a gestiona programările și a verifică disponibilitatea medicilor și a altor resurse. Aplicația ar putea ajută la programarea pacienților în funcție de disponibilitatea medicilor și a altor resurse, astfel încât să se maximizeze eficiența clinică.
Descriere API folosite
Aplicația creată folosește două servicii în cloud: este disponibilă online prin publicarea acesteia pe platforma de hosting, Vercel și este conectată la baza de date MongoDB.
Vercel este o platformă open-source, care încurajează colaborarea și dezvoltarea comunității. Dezvoltatorii pot utiliza platforma pentru a crea și găzdui aplicații open-source gratuit, ceea ce poate ajută la dezvoltarea comunității și la îmbunătățirea cunoștințelor și abilităților de programare.
Prin utilizarea Vercel, dezvoltatorii pot să se concentreze pe dezvoltarea aplicației, fără a fi nevoie să se preocupe de problemele legate de infrastructură și performanța serverelor. Vercel oferă o infrastructură globală și scalabilă, astfel încât aplicațiile să poată fi rulate și accesate rapid de către utilizatori din orice colț al lumii. De asemenea, platforma oferă suport pentru o gamă largă de tehnologii și limbaje de programare, inclusiv JavaScript, TypeScript, Python și Ruby, printre altele.
MongoDB este un serviciu de cloud pentru baze de date NoSQL, care oferă posibilitatea de a stoca, gestiona și accesa datele într-un mod scalabil și eficient.
Fluxuri de date
În baza de date în cloud s-au stocat informațiile referitoare la programările realizate de pacienții clinicii precum: numele și prenumele pacientului, cât și ale doctorului, specializarea medicului ales și dată la care se dorește programarea.
În cadrul aplicației se realizează get-uri și post-uri pentru diferitele operații efectuate de un client.
Au fost realizate operațiile crud de select, insert, update, delete pentru toată tabela cât și pentru id-uri explicite.
 
image.png

Prezentarea aplicației

image.png
 
Pagină principala a aplicației, care este expusă mai sus, conține lista complete a programărilor realizate de pacienți și oferă, de asemenea, posibilitatea adaugarii unei noi programări, prin apăsarea butonului “Programează-te acum!”.
În momentul accesării butonului, se deschide formularul de introducere a detaliilor unei programări.

image.png
 
După ce câmpurile sunt completate, se apasă butonul “Submit”, programarea este inserată în baza de date, precum și în lista complete afișată în pagină principala la care utilizatorul este redirecționat.


