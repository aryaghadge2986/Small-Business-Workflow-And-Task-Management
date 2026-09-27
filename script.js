* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Arial, sans-serif;
}

body {
    background: #f6f8fc;
    color: #172033;
}

.app {
    display: flex;
    min-height: 100vh;
}

/* SIDEBAR */

.sidebar {
    width: 245px;
    min-height: 100vh;
    background: #111827;
    color: white;
    padding: 30px 20px;
}

.sidebar h1 {
    font-size: 30px;
    margin-bottom: 5px;
}

.sidebar p {
    color: #94a3b8;
    font-size: 14px;
    margin-bottom: 40px;
}

.sidebar button {
    width: 100%;
    border: none;
    background: transparent;
    color: #cbd5e1;
    padding: 14px 16px;
    margin-bottom: 8px;
    border-radius: 10px;
    text-align: left;
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s;
}

.sidebar button:hover {
    background: #2563eb;
    color: white;
    transform: translateX(3px);
}

/* MAIN */

.main {
    flex: 1;
    padding: 35px 45px;
    max-width: 1400px;
}

header {
    margin-bottom: 30px;
}

header h2 {
    font-size: 30px;
    color: #111827;
    margin-bottom: 6px;
}

header p {
    color: #64748b;
    font-size: 15px;
}

/* STAT CARDS */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 25px;
}

.card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 22px;
    box-shadow: 0 5px 18px rgba(15, 23, 42, 0.05);
    transition: 0.2s;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

.card h3 {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
}

.card strong {
    font-size: 32px;
    color: #111827;
}

/* ADD TASK */

.task-form {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 5px 18px rgba(15, 23, 42, 0.05);
}

.task-form h2 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #111827;
}

.task-form input,
.task-form select {
    height: 45px;
    padding: 0 14px;
    border: 1px solid #dbe2ea;
    border-radius: 9px;
    outline: none;
    background: white;
    color: #334155;
    margin-right: 8px;
}

.task-form input {
    width: 36%;
}

.task-form select {
    width: 20%;
}

.task-form input:focus,
.task-form select:focus,
#search:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.task-form button {
    height: 45px;
    padding: 0 20px;
    border: none;
    border-radius: 9px;
    background: #2563eb;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
}

.task-form button:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
}

/* TASK SECTION */

.task-section {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 5px 18px rgba(15, 23, 42, 0.05);
}

.task-section h2 {
    font-size: 20px;
    margin-bottom: 18px;
}

#search {
    width: 100%;
    height: 45px;
    padding: 0 15px;
    border: 1px solid #dbe2ea;
    border-radius: 9px;
    outline: none;
    margin-bottom: 18px;
}

/* TASK CARD */

.task {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 12px;
    transition: 0.2s;
}

.task:hover {
    border-color: #bfdbfe;
    background: #f8fbff;
}

.task h3 {
    font-size: 17px;
    margin-bottom: 8px;
    color: #172033;
}

.task p {
    display: inline-block;
    margin-right: 18px;
    color: #64748b;
    font-size: 14px;
}

/* TASK BUTTONS */

.task button {
    padding: 8px 14px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    margin-top: 12px;
    margin-right: 7px;
}

.task button:first-of-type {
    background: #dcfce7;
    color: #15803d;
}

.task button:first-of-type:hover {
    background: #bbf7d0;
}

.task button:last-of-type {
    background: #fee2e2;
    color: #dc2626;
}

.task button:last-of-type:hover {
    background: #fecaca;
}

/* MOBILE */

@media (max-width: 900px) {

    .sidebar {
        width: 190px;
    }

    .main {
        padding: 25px;
    }

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .task-form input,
    .task-form select {
        width: 100%;
        margin: 5px 0;
    }

    .task-form button {
        width: 100%;
        margin-top: 8px;
    }
}