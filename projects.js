const projectsData = [
  {"id": 121556633, "type": "achizitii-directe", "code": "DA39831048", "date": "2026-02-13T08:48:54.000Z", "status": "Oferta refuzata", "project_type": "Servicii", "value": 600.0, "cpv": "50532400-7", "name": "Servicii Pram - echipament protectie electricieni", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 101761268, "type": "achizitii-offline", "code": "DAN2680863", "date": "2026-02-11T13:43:54.000Z", "status": "Publicat", "project_type": "Servicii", "value": 5000.0, "cpv": "50324100-3", "name": "Servicii de întreținere și operare tehnică (mentenanță) a sistemului BMS instalat în cele 2 corpuri de clădiri C1 și C2 de la sediul din str. Traian nr.254 - ACT ADIȚIONAL nr.26928/29.12.2025", "authority": "Politia Locala Galati", "city": "Galati"},
  {"id": 121458171, "type": "achizitii-directe", "code": "DA39739372", "date": "2026-01-29T12:51:05.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 6480.0, "cpv": "50532400-7", "name": "Servicii Pram - echipament protectie electricieni", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 120678375, "type": "achizitii-directe", "code": "DA39011936", "date": "2025-10-03T12:03:04.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 70750.0, "cpv": "35111300-8", "name": "Bila Extinctoare", "authority": "COMPANIA MUNICIPALA PARKING BUCURESTI S.A.", "city": "Bucuresti"},
  {"id": 100572515, "type": "licitatii-publice", "code": "CAN1153733", "date": "2025-09-03T08:21:55.000Z", "status": "Atribuita", "project_type": "Furnizare", "value": 783598.0, "cpv": "24951220-3", "name": "Bile automate pentru stingerea incendiilor", "authority": "SPEEH HIDROELECTRICA SA", "city": "Bucuresti"},
  {"id": 120365989, "type": "achizitii-directe", "code": "DA38720335", "date": "2025-08-20T11:18:39.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 34118.0, "cpv": "45314320-0", "name": "Proiectare, execuție lucrări, furnizare de cablare structurată - Spital Municipal Tecuci", "authority": "Spitalul Municipal Anton Cincu Tecuci", "city": "Tecuci"},
  {"id": 101602318, "type": "achizitii-offline", "code": "DAN2527283", "date": "2025-08-11T12:55:36.000Z", "status": "Publicat", "project_type": "Servicii", "value": 30000.0, "cpv": "50324100-3", "name": "Servicii de întreținere și operare tehnică (mentenanță) a sistemului BMS instalat în cele 2 corpuri de clădiri C1 și C2 de la sediul din str.Traian nr.254 - CONTRACT 12963/01.07.2025", "authority": "Politia Locala Galati", "city": "Galati"},
  {"id": 119028929, "type": "achizitii-directe", "code": "DA37475850", "date": "2025-02-14T10:07:19.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 142389.0, "cpv": "45332000-3", "name": "Lucrari de reparatii conducta de apa si colectare de canalizare strada Brailei nr. 34", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 100500360, "type": "licitatii-publice", "code": "SCNA1108560", "date": "2024-10-10T07:56:30.000Z", "status": "Atribuita", "project_type": "Lucrari", "value": 3700505.0, "cpv": "45232150-8", "name": "Extindere sistem de apă și canalizare în satul Valea Mărului, comuna Valea Mărului - ETAPA III", "authority": "COMUNA VALEA MARULUI (PRIMARIA VALEA MARULUI)", "city": "Valea Marului"},
  {"id": 101342389, "type": "achizitii-offline", "code": "DAN2276429", "date": "2024-09-30T09:52:16.000Z", "status": "Publicat", "project_type": "Lucrari", "value": 205675.5, "cpv": "45330000-9", "name": "Reparatii retea apa - canal camin mecanici locomotive si separarea instalatiei de hidranti in Depoul Galati", "authority": "SNTFC CFR CALATORI S.A.", "city": "Bucuresti"},
  {"id": 100495437, "type": "licitatii-publice", "code": "SCNA1110797", "date": "2024-09-19T05:41:09.000Z", "status": "Atribuita", "project_type": "Lucrari", "value": 371272.0, "cpv": "45232150-8", "name": "Reabilitare retea apa potabila Dn 200 - Dn 100 Micro 20 bl. B7 - G5", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 117670758, "type": "achizitii-directe", "code": "DA36207312", "date": "2024-07-29T06:40:52.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 561273.0, "cpv": "45453000-7", "name": "Servicii de executie lucrari de reparatii generale si renovare conform invitatie nr.6999/18.07.2024", "authority": "DIRECTIA DE ASISTENTA SOCIALA A MUNICIPIULUI GALATI", "city": "Galati"},
  {"id": 117312584, "type": "achizitii-directe", "code": "DA35873023", "date": "2024-06-04T08:00:39.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 289994.0, "cpv": "45231112-3", "name": "Lucrari de extindere conducta de alimentare cu apa potabila pe DC 84 si DJ 24I in satul Nartesti", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 116871054, "type": "achizitii-directe", "code": "DA35461416", "date": "2024-04-09T06:33:34.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 16150.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "TRANSURB S.A. GALATI", "city": "Galati"},
  {"id": 116820495, "type": "achizitii-directe", "code": "DA35415307", "date": "2024-04-03T07:11:44.000Z", "status": "Oferta neacceptata in termen", "project_type": "Furnizare", "value": 16150.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "TRANSURB S.A. GALATI", "city": "Galati"},
  {"id": 116762445, "type": "achizitii-directe", "code": "DA35360542", "date": "2024-03-27T08:38:09.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 121000.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "SPITAL CLINIC DE BOLI INFECTIOASE SF. PARASCHEVA IASI", "city": "Iasi"},
  {"id": 116743826, "type": "achizitii-directe", "code": "DA35343273", "date": "2024-03-25T12:49:53.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 491994.0, "cpv": "45261215-4", "name": "Sistem fotovoltaic cu montaj", "authority": "Administratia Pietelor Agroalimentare S.A.", "city": "Galati"},
  {"id": 116689172, "type": "achizitii-directe", "code": "DA35292905", "date": "2024-03-19T08:40:28.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 31500.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB02", "authority": "Directia Generala de Protectie Interna", "city": "Bucuresti"},
  {"id": 116689073, "type": "achizitii-directe", "code": "DA35292836", "date": "2024-03-19T08:37:54.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 55000.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "Directia Generala de Protectie Interna", "city": "Bucuresti"},
  {"id": 116389825, "type": "achizitii-directe", "code": "DA35015332", "date": "2024-02-12T08:05:12.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 6650.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "TRANSURB S.A. GALATI", "city": "Galati"},
  {"id": 116375670, "type": "achizitii-directe", "code": "DA35002205", "date": "2024-02-08T12:05:32.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 1100.0, "cpv": "35111300-8", "name": "Bilă extinctoare", "authority": "MINISTERUL APARARII - UNITATEA MILITARA 02523", "city": "Bucuresti"},
  {"id": 116288591, "type": "achizitii-directe", "code": "DA34921235", "date": "2024-01-29T11:33:56.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 3800.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "TRANSURB S.A. GALATI", "city": "Galati"},
  {"id": 116111821, "type": "achizitii-directe", "code": "DA34756675", "date": "2023-12-20T13:37:42.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 76000.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 116067180, "type": "achizitii-directe", "code": "DA34714751", "date": "2023-12-15T09:24:09.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 397405.0, "cpv": "45261215-4", "name": "Sistem panouri fotovoltaice 100 kw Hala Revizia Galati SRTFC Galati", "authority": "SNTFC CFR CALATORI S.A.", "city": "Bucuresti"},
  {"id": 115999203, "type": "achizitii-directe", "code": "DA34651162", "date": "2023-12-08T07:17:52.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 10860.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "MINISTERUL APARARII - UNITATEA MILITARA 02542 FOCSANI", "city": "Focsani"},
  {"id": 115987393, "type": "achizitii-directe", "code": "DA34640049", "date": "2023-12-07T07:35:21.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 75997.0, "cpv": "45232100-3", "name": "Lucrari de reparatii pentru imbunatatirea sistemului hidraulic (aductiune) din Comuna Mastacani", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 115895463, "type": "achizitii-directe", "code": "DA34555857", "date": "2023-11-23T08:26:00.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 16500.0, "cpv": "35111300-8", "name": "Achizitie bile extinctoare Elide Fire ELB01", "authority": "MINISTERUL APARARII - UNITATEA MILITARA 02523", "city": "Bucuresti"},
  {"id": 115854985, "type": "achizitii-directe", "code": "DA34516207", "date": "2023-11-17T07:53:08.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 5000.0, "cpv": "35111000-5", "name": "Bile Extinctoare", "authority": "RA Administratia Zonei Libere Galati", "city": "Galati"},
  {"id": 115757989, "type": "achizitii-directe", "code": "DA34425793", "date": "2023-11-02T12:51:11.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 71571.0, "cpv": "45232100-3", "name": "Lucrări de reparații la conducta de serviciu PE Dn 75-63-32-25 mm", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 115678731, "type": "achizitii-directe", "code": "DA34351784", "date": "2023-10-26T07:43:46.000Z", "status": "Oferta refuzata", "project_type": "Furnizare", "value": 17600.0, "cpv": "35111300-8", "name": "Achizitie bile extinctoare Elide Fire ELB01", "authority": "MINISTERUL APARARII - UNITATEA MILITARA 02523", "city": "Bucuresti"},
  {"id": 115533498, "type": "achizitii-directe", "code": "DA34217008", "date": "2023-10-11T06:41:36.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 4200.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "CASA DE ASIGURARI DE SANATATE GALATI", "city": "Galati"},
  {"id": 115519072, "type": "achizitii-directe", "code": "DA34203668", "date": "2023-10-10T05:19:12.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 22100.0, "cpv": "35110000-8", "name": "Bila Extinctoare Elide Fire ELB02", "authority": "MINISTERUL APARARII - UNITATEA MILITARA 02489 GALATI", "city": "Galati"},
  {"id": 115514904, "type": "achizitii-directe", "code": "DA34199745", "date": "2023-10-09T10:50:34.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 270000.0, "cpv": "35111300-8", "name": "Achiziția de dispozitive automate de stingere incendiu", "authority": "SECTOR 3 (PRIMARIA SECTOR 3 BUCURESTI)", "city": "Bucuresti"},
  {"id": 115511339, "type": "achizitii-directe", "code": "DA34196666", "date": "2023-10-09T08:54:57.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 5700.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "TRANSURB S.A. GALATI", "city": "Galati"},
  {"id": 115470124, "type": "achizitii-directe", "code": "DA34158118", "date": "2023-10-03T11:45:54.000Z", "status": "Conditii neacceptate la termen", "project_type": "Furnizare", "value": 270000.0, "cpv": "35111300-8", "name": "Achiziția de dispozitive automate de stingere incendiu", "authority": "SECTOR 3 (PRIMARIA SECTOR 3 BUCURESTI)", "city": "Bucuresti"},
  {"id": 115323823, "type": "achizitii-directe", "code": "DA34021929", "date": "2023-09-15T07:02:17.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 6300.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "CASA DE ASIGURARI DE SANATATE GALATI", "city": "Galati"},
  {"id": 115304239, "type": "achizitii-directe", "code": "DA34003771", "date": "2023-09-13T09:44:56.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 13794.0, "cpv": "19231000-4", "name": "LENJERII", "authority": "DIRECTIA DE ASISTENTA SOCIALA A MUNICIPIULUI GALATI", "city": "Galati"},
  {"id": 115236098, "type": "achizitii-directe", "code": "DA33940324", "date": "2023-09-05T09:09:30.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 16000.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB03", "authority": "TRANSURB S.A. GALATI", "city": "Galati"},
  {"id": 115227560, "type": "achizitii-directe", "code": "DA33932440", "date": "2023-09-04T11:07:28.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 77760.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01 + Montaj", "authority": "DIRECTIA DE ASISTENTA SOCIALA A MUNICIPIULUI GALATI", "city": "Galati"},
  {"id": 115161786, "type": "achizitii-directe", "code": "DA33872030", "date": "2023-08-24T10:25:17.000Z", "status": "Oferta neacceptata in termen", "project_type": "Furnizare", "value": 270000.0, "cpv": "35111300-8", "name": "Achiziția de dispozitive automate de stingere incendiu în unități de învățământ - SECTOR 3", "authority": "SECTOR 3 (PRIMARIA SECTOR 3 BUCURESTI)", "city": "Bucuresti"},
  {"id": 115154212, "type": "achizitii-directe", "code": "DA33865038", "date": "2023-08-23T11:18:45.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 47500.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 115046700, "type": "achizitii-directe", "code": "DA33765723", "date": "2023-08-03T05:48:18.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 150000.0, "cpv": "35110000-8", "name": "Furnizare bilă extinctoare ELIDE FIRE ELB01", "authority": "Regia Autonoma Administratia Patrimoniului Protocolului de Stat Bucuresti", "city": "Bucuresti"},
  {"id": 114936265, "type": "achizitii-directe", "code": "DA33663288", "date": "2023-07-17T07:47:46.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 55000.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "SERVICIUL PUBLIC ECOSAL GALATI", "city": "Galati"},
  {"id": 114772458, "type": "achizitii-directe", "code": "DA33511711", "date": "2023-06-22T07:15:09.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 2850.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "TRANSURB S.A. GALATI", "city": "Galati"},
  {"id": 114558563, "type": "achizitii-directe", "code": "DA33312628", "date": "2023-05-22T08:39:15.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 36100.0, "cpv": "35110000-8", "name": "Bila Extinctoare Elide Fire ELB01", "authority": "MINISTERUL APARARII - UNITATEA MILITARA 02489 GALATI", "city": "Galati"},
  {"id": 114403500, "type": "achizitii-directe", "code": "DA33168865", "date": "2023-05-04T07:32:19.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 145656.0, "cpv": "45261215-4", "name": "Montaj sistem fotovoltaic - conform oferta nr. 15694/03.05.2023", "authority": "CASA DE ASIGURARI DE SANATATE GALATI", "city": "Galati"},
  {"id": 113634410, "type": "achizitii-directe", "code": "DA32456497", "date": "2023-01-30T08:41:50.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 82200.0, "cpv": "35111300-8", "name": "Bile extinctoare", "authority": "APA CANAL S.A.", "city": "Galati"},
  {"id": 113110107, "type": "achizitii-directe", "code": "DA31969322", "date": "2022-11-23T07:08:13.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 21250.0, "cpv": "35111300-8", "name": "Bila Extinctoare Elide Fire", "authority": "Spitalul Clinic de Urgenta pentru Copii Sf. Ioan Galati", "city": "Galati"}
];

// Returns the full static SEAP dataset synchronously — always available, no Firebase needed.
function getStaticProjects() {
    return projectsData;
}

// Returns only admin-managed projects from Firebase (those with images/photos).
async function getAdminProjects() {
    try {
        const snap = await db.ref('projects').once('value');
        console.log('DEBUG snap exists:', snap.exists(), '| numChildren:', snap.numChildren());
        if (!snap.exists()) return [];
        const arr = [];
        snap.forEach(child => {
            console.log('DEBUG child key:', child.key);
            arr.push(child.val());
        });
        return arr;
    } catch (err) {
        console.warn('Firebase error:', err);
        return [];
    }
}

// Returns merged data: static SEAP data, with admin Firebase projects overlaid (by ID).
// Use this when you need both the full list and admin-enriched data (images, scope, etc.).
async function getProjects() {
    const adminProjects = await getAdminProjects();
    if (adminProjects.length === 0) return [...projectsData];
    const adminMap = new Map(adminProjects.map(p => [String(p.id), p]));
    const merged = projectsData.map(p => adminMap.has(String(p.id)) ? { ...p, ...adminMap.get(String(p.id)) } : p);
    // Add any admin projects that don't exist in the static list
    adminProjects.forEach(p => {
        if (!projectsData.some(sp => String(sp.id) === String(p.id))) merged.push(p);
    });
    return merged.sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function saveProject(project) {
    await db.ref('projects/' + project.id).set(project);
}

async function deleteProject(id) {
    await db.ref('projects/' + id).remove();
}

async function uploadImage(file, folder) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async () => {
            try {
                const base64 = reader.result.split(',')[1];
                const formData = new FormData();
                formData.append('key', IMGBB_API_KEY);
                formData.append('image', base64);
                formData.append('name', folder + '_' + Date.now());
                const response = await fetch('https://api.imgbb.com/1/upload', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                if (data.success) {
                    resolve(data.data.url);
                } else {
                    reject(new Error('ImgBB: ' + (data.error?.message || 'Upload failed')));
                }
            } catch (err) {
                reject(err);
            }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function getBannerImages() {
    try {
        const snap = await db.ref('banner_images').once('value');
        const val = snap.val() || {};
        const arr = [];
        for (let i = 0; i < 5; i++) arr.push(val[i] || null);
        return arr;
    } catch (err) {
        return new Array(5).fill(null);
    }
}

async function saveBannerImages(images) {
    const obj = {};
    images.forEach((img, i) => { obj[i] = img || null; });
    await db.ref('banner_images').set(obj);
}

function getAdminPass() {
    return ADMIN_PASSWORD;
}
