const projectsData = [
  { "id": 121556633, "type": "achizitii-directe", "code": "DA39831048", "date": "2026-02-13T08:48:54.000Z", "status": "Oferta refuzata", "project_type": "Servicii", "value": 600, "cpv": "50532400-7", "name": "Servicii Pram - echipament protectie electricieni", "authority": "APA CANAL S.A.", "city": "Galati" },
  { "id": 101761268, "type": "achizitii-offline", "code": "DAN2680863", "date": "2026-02-11T13:43:54.000Z", "status": "Publicat", "project_type": "Servicii", "value": 5000, "cpv": "50324100-3", "name": "Servicii mentenanță sistem BMS", "authority": "Politia Locala Galati", "city": "Galati" },
  { "id": 121458171, "type": "achizitii-directe", "code": "DA39739372", "date": "2026-01-29T12:51:05.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 6480, "cpv": "50532400-7", "name": "Servicii Pram", "authority": "APA CANAL S.A.", "city": "Galati" },
  { "id": 120678375, "type": "achizitii-directe", "code": "DA39011936", "date": "2025-10-03T12:03:04.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 70750, "cpv": "35111300-8", "name": "Bila Extinctoare", "authority": "COMPANIA MUNICIPALA PARKING BUCURESTI S.A.", "city": "Bucuresti" },
  { "id": 100572515, "type": "licitatii-publice", "code": "CAN1153733", "date": "2025-09-03T08:21:55.000Z", "status": "Atribuita", "project_type": "Furnizare", "value": 783598, "cpv": "24951220-3", "name": "Bile automate pentru stingerea incendiilor", "authority": "SPEEH HIDROELECTRICA SA", "city": "Bucuresti" },
  { "id": 120365989, "type": "achizitii-directe", "code": "DA38720335", "date": "2025-08-20T11:18:39.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 34118, "cpv": "45314320-0", "name": "Cablare structurată Spital Tecuci", "authority": "Spitalul Municipal Tecuci", "city": "Tecuci" },
  { "id": 101602318, "type": "achizitii-offline", "code": "DAN2527283", "date": "2025-08-11T12:55:36.000Z", "status": "Publicat", "project_type": "Servicii", "value": 30000, "cpv": "50324100-3", "name": "Mentenanță BMS str. Traian", "authority": "Politia Locala Galati", "city": "Galati" },
  { "id": 101342389, "type": "achizitii-offline", "code": "DAN2276429", "date": "2024-09-30T09:52:16.000Z", "status": "Publicat", "project_type": "Lucrari", "value": 205675.5, "cpv": "45330000-9", "name": "Reparatii retea apa-canal Depoul Galati", "authority": "SNTFC CFR CALATORI S.A.", "city": "Bucuresti" },
  { "id": 100500360, "type": "licitatii-publice", "code": "SCNA1108560", "date": "2024-10-10T07:56:54.000Z", "status": "Atribuita", "project_type": "Lucrari", "value": 3700505, "cpv": "45232150-8", "name": "Extindere sistem apă și canalizare Valea Mărului", "authority": "COMUNA VALEA MARULUI", "city": "Valea Marului" },
  { "id": 100495437, "type": "licitatii-publice", "code": "SCNA1110797", "date": "2024-09-19T05:41:09.000Z", "status": "Atribuita", "project_type": "Lucrari", "value": 371272, "cpv": "45232150-8", "name": "Reabilitare rețea apă Micro 20", "authority": "APA CANAL S.A.", "city": "Galati" },
  { "id": 117670758, "type": "achizitii-directe", "code": "DA36207312", "date": "2024-07-29T06:40:52.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 561273, "cpv": "45453000-7", "name": "Reparații generale și renovare", "authority": "DAS GALAȚI", "city": "Galati" },
  { "id": 117312584, "type": "achizitii-directe", "code": "DA35873023", "date": "2024-06-04T08:00:39.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 289994, "cpv": "45231112-3", "name": "Extindere conductă apă Nărtești", "authority": "APA CANAL S.A.", "city": "Galati" },
  { "id": 116871054, "type": "achizitii-directe", "code": "DA35461416", "date": "2024-04-09T06:33:34.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 16150, "cpv": "35111300-8", "name": "Bila Extinctoare TRANSURB", "authority": "TRANSURB S.A.", "city": "Galati" },
  { "id": 116762445, "type": "achizitii-directe", "code": "DA35360542", "date": "2024-03-27T08:38:09.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 121000, "cpv": "35111300-8", "name": "Bila Extinctoare Spital Iași", "authority": "SPITAL CLINIC IAȘI", "city": "Iasi" },
  { "id": 116743826, "type": "achizitii-directe", "code": "DA35343273", "date": "2024-03-25T12:49:53.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 491994, "cpv": "45261215-4", "name": "SISTEM FOTOVOLTAIC ADMINISTRATIA PIETELOR", "authority": "Administrația Piețelor S.A.", "city": "Galati" },
  { "id": 116689172, "type": "achizitii-directe", "code": "DA35292905", "date": "2024-03-19T08:40:28.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 31500, "cpv": "35111300-8", "name": "Bila Extinctoare DGPI", "authority": "DGPI", "city": "Bucuresti" },
  { "id": 116111821, "type": "achizitii-directe", "code": "DA34756675", "date": "2023-12-20T13:37:42.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 76000, "cpv": "35111300-8", "name": "Bila Extinctoare APA CANAL", "authority": "APA CANAL S.A.", "city": "Galati" },
  { "id": 116067180, "type": "achizitii-directe", "code": "DA34714751", "date": "2023-12-15T09:24:09.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 397405, "cpv": "45261215-4", "name": "Sistem fotovoltaic 100 kw Revizia Galati", "authority": "SNTFC CFR CALATORI S.A.", "city": "Bucuresti" },
  { "id": 115987393, "type": "achizitii-directe", "code": "DA34640049", "date": "2023-12-07T07:35:21.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 75997, "cpv": "45232100-3", "name": "Reparații aducțiune Măstăcani", "authority": "APA CANAL S.A.", "city": "Galati" },
  { "id": 115854985, "type": "achizitii-directe", "code": "DA34516207", "date": "2023-11-17T07:53:08.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 5000, "cpv": "35111000-5", "name": "Bile Extinctoare Zone Libere", "authority": "Administrația Zonei Libere", "city": "Galati" },
  { "id": 115757989, "type": "achizitii-directe", "code": "DA34425793", "date": "2023-11-02T12:51:11.000Z", "status": "Oferta acceptata", "project_type": "Lucrari", "value": 71571, "cpv": "45232100-3", "name": "Reparații conductă serviciu PE", "authority": "APA CANAL S.A.", "city": "Galati" },
  { "id": 115533498, "type": "achizitii-directe", "code": "DA34217008", "date": "2023-10-11T06:41:36.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 4200, "cpv": "35111300-8", "name": "Bila Extinctoare CAS GALAȚI", "authority": "CAS GALAȚI", "city": "Galati" },
  { "id": 115514904, "type": "achizitii-directe", "code": "DA34199745", "date": "2023-10-09T10:50:34.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 270000, "cpv": "35111300-8", "name": "Dispozitive automate stingere incendiu", "authority": "SECTOR 3 BUCURESTI", "city": "Bucuresti" },
  { "id": 115304239, "type": "achizitii-directe", "code": "DA34003771", "date": "2023-09-13T09:44:56.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 13794, "cpv": "19231000-4", "name": "LENJERII DAS", "authority": "DAS GALAȚI", "city": "Galati" },
  { "id": 115227560, "type": "achizitii-directe", "code": "DA33932440", "date": "2023-09-04T11:07:28.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 77760, "cpv": "35111300-8", "name": "Bila Extinctoare + Montaj", "authority": "DAS GALAȚI", "city": "Galati" },
  { "id": 115154212, "type": "achizitii-directe", "code": "DA33865038", "date": "2023-08-23T11:18:45.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 47500, "cpv": "35111300-8", "name": "Bila Extinctoare APA CANAL", "authority": "APA CANAL S.A.", "city": "Galati" },
  { "id": 115046700, "type": "achizitii-directe", "code": "DA33765723", "date": "2023-08-03T05:48:18.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 150000, "cpv": "35110000-8", "name": "Bila extinctoare ELIDE FIRE", "authority": "RA-APPS BUCUREȘTI", "city": "Bucuresti" },
  { "id": 114936265, "type": "achizitii-directe", "code": "DA33663288", "date": "2023-07-17T07:47:46.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 55000, "cpv": "35111300-8", "name": "Bila Extinctoare ECOSAL", "authority": "ECOSAL GALAȚI", "city": "Galati" },
  { "id": 114403500, "type": "achizitii-directe", "code": "DA33168865", "date": "2023-05-04T07:32:19.000Z", "status": "Oferta acceptata", "project_type": "Servicii", "value": 145656, "cpv": "45261215-4", "name": "Montaj sistem fotovoltaic CAS", "authority": "CAS GALAȚI", "city": "Galati" },
  { "id": 113110107, "type": "achizitii-directe", "code": "DA31969322", "date": "2022-11-23T07:08:13.000Z", "status": "Oferta acceptata", "project_type": "Furnizare", "value": 21250, "cpv": "35111300-8", "name": "Bila Extinctoare Spital Urgență", "authority": "Spitalul Clinic Sf. Ioan", "city": "Galati" }
];

// --- Firebase Data Functions ---

async function getProjects() {
    try {
        const snap = await db.ref('projects').once('value');
        if (!snap.exists()) {
            // First run: seed the database with initial data
            const batch = {};
            projectsData.forEach(p => { batch[p.id] = p; });
            await db.ref('projects').set(batch);
            return [...projectsData];
        }
        const arr = [];
        snap.forEach(child => arr.push(child.val()));
        return arr.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (err) {
        console.warn('Firebase unavailable, using local data:', err);
        return [...projectsData];
    }
}

async function saveProject(project) {
    await db.ref('projects/' + project.id).set(project);
}

async function deleteProject(id) {
    await db.ref('projects/' + id).remove();
}

async function uploadImage(file, folder) {
    const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const ref = storage.ref(folder + '/' + Date.now() + '_' + safe);
    await ref.put(file);
    return await ref.getDownloadURL();
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
