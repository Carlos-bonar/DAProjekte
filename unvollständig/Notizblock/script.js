//notizen anzeigen
    //ich brauche notizen
    let notesTitle = ['BA', 'Aufgabe', 'bö'];

    let notes = ['Banane', 'Rasen mähen', 'Zähne putzen'];

    let TrashNotesTitle = [];
    let trashNotes = [];

    
    function renderNotes(){
        let contentRef = document.getElementById('content')
        contentRef.innerHTML ="";
            

        for (let indexNote = 0; indexNote < notes.length; indexNote++){

            contentRef.innerHTML += getNoteTemplate(indexNote);
        }
        
    }

    function getNoteTemplate(indexNote){
        return `<p> + Title:${notesTitle[indexNote]} -> ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">x</button></p>`;
    }
   

    function addNote(){
        let noteInputRef = document.getElementById('noteInput');
        let noteInput = noteInputRef.value;

        notes.push(noteInput);

        renderNotes();

        noteInputRef.value = "";
    }
    function deleteNote(indexNote){
        let trashNote = notes.splice(indexNote, 1);
        let trashNotetitle = notesTitle.splice(indexNote, 1);
        trashNotes.push(trashNote);
        TrashNotesTitle.push(trashNotetitle);
        renderNotes();
        renderTrashNotes();
        
    }

    function renderTrashNotes(){
        let trashcontentRef = document.getElementById('trash')
        trashcontentRef.innerHTML ="";
            

        for (let indextrashNote = 0; indextrashNote < trashNotes.length; indextrashNote++){

            trashcontentRef.innerHTML += getTrashNoteTemplate(indextrashNote);
        }
        
    }

    function getTrashNoteTemplate(indextrashNote){
        return `<p> + Title:${TrashNotesTitle[indextrashNote]} ->  ${trashNotes[indextrashNote]}<button onclick="deletetrashNote(${indextrashNote})">x</button></p>`;
    }

    function deletetrashNote(indextrashNote){
        trashNotes.splice(indextrashNote, 1);
        renderTrashNotes();
        
    }