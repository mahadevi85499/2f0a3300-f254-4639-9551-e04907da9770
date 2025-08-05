import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  FileText, 
  Search,
  Star,
  Clock,
  Trash2,
  Edit3,
  Save
} from "lucide-react";

const ScratchpadWorkspace = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Project Ideas",
      content: "1. Personal AI Assistant\n2. Smart Home Dashboard\n3. Productivity Tracker\n\nNext steps:\n- Research market demand\n- Create wireframes\n- Plan MVP features",
      lastModified: "2 hours ago",
      isPinned: true,
      tags: ["projects", "ideas"]
    },
    {
      id: 2,
      title: "Meeting Notes - Q4 Planning",
      content: "Key decisions:\n- Focus on mobile-first approach\n- Implement dark mode\n- Add offline capabilities\n\nAction items:\n- Review competitor analysis\n- Schedule design review\n- Update project timeline",
      lastModified: "1 day ago",
      isPinned: false,
      tags: ["meetings", "planning"]
    },
    {
      id: 3,
      title: "Code Snippets",
      content: "// React Hook for Local Storage\nconst useLocalStorage = (key, initialValue) => {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      return initialValue;\n    }\n  });\n  // ... rest of implementation",
      lastModified: "3 days ago",
      isPinned: true,
      tags: ["code", "react", "hooks"]
    },
    {
      id: 4,
      title: "Learning Goals 2024",
      content: "Technical Skills:\n- Master TypeScript\n- Learn Next.js 14\n- Explore AI/ML basics\n- Practice system design\n\nSoft Skills:\n- Improve communication\n- Learn project management\n- Build network\n\nBooks to read:\n- Clean Code\n- System Design Interview",
      lastModified: "1 week ago",
      isPinned: false,
      tags: ["goals", "learning", "career"]
    }
  ]);

  const [selectedNote, setSelectedNote] = useState(notes[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSaveNote = () => {
    setNotes(notes.map(note => 
      note.id === selectedNote.id 
        ? { ...selectedNote, lastModified: "Just now" }
        : note
    ));
    setIsEditing(false);
  };

  const togglePin = (noteId: number) => {
    setNotes(notes.map(note =>
      note.id === noteId ? { ...note, isPinned: !note.isPinned } : note
    ));
    if (selectedNote.id === noteId) {
      setSelectedNote({ ...selectedNote, isPinned: !selectedNote.isPinned });
    }
  };

  const createNewNote = () => {
    const newNote = {
      id: Math.max(...notes.map(n => n.id)) + 1,
      title: "Untitled Note",
      content: "",
      lastModified: "Just now",
      isPinned: false,
      tags: []
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setIsEditing(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Scratchpad</h1>
          <p className="text-muted-foreground">Quick notes and ideas</p>
        </div>
        <Button onClick={createNewNote} className="bg-gradient-primary hover:shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          New Note
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Notes List */}
        <div className="lg:col-span-1">
          <Card className="p-4 bg-card border-primary/20 h-full flex flex-col">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-input/50 border-primary/20"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2">
              {filteredNotes
                .sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0))
                .map((note) => (
                <div
                  key={note.id}
                  onClick={() => setSelectedNote(note)}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedNote.id === note.id
                      ? "bg-primary/20 border-primary/50"
                      : "bg-secondary/30 border-primary/10 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-sm truncate flex-1">{note.title}</h3>
                    <div className="flex items-center gap-1 ml-2">
                      {note.isPinned && (
                        <Star className="h-3 w-3 text-cyber-purple fill-current" />
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePin(note.id);
                        }}
                        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Star className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {note.content.substring(0, 100)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {note.lastModified}
                    </div>
                    
                    <div className="flex gap-1">
                      {note.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs py-0 px-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Note Editor */}
        <div className="lg:col-span-2">
          <Card className="p-6 bg-card border-primary/20 h-full flex flex-col">
            {selectedNote ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <FileText className="h-5 w-5 text-cyber-blue" />
                    {isEditing ? (
                      <Input
                        value={selectedNote.title}
                        onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })}
                        className="text-xl font-semibold bg-transparent border-none p-0 focus:ring-0"
                      />
                    ) : (
                      <h2 className="text-xl font-semibold">{selectedNote.title}</h2>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => togglePin(selectedNote.id)}
                    >
                      <Star className={`h-4 w-4 ${selectedNote.isPinned ? "text-cyber-purple fill-current" : ""}`} />
                    </Button>
                    
                    {isEditing ? (
                      <Button size="sm" onClick={handleSaveNote} className="bg-cyber-green/20 text-cyber-green hover:bg-cyber-green/30">
                        <Save className="h-4 w-4 mr-1" />
                        Save
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit3 className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    )}
                    
                    <Button size="sm" variant="ghost" className="text-destructive hover:bg-destructive/20">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1">
                  {isEditing ? (
                    <Textarea
                      value={selectedNote.content}
                      onChange={(e) => setSelectedNote({ ...selectedNote, content: e.target.value })}
                      placeholder="Start writing..."
                      className="w-full h-full resize-none bg-secondary/30 border-primary/20 focus:border-primary"
                    />
                  ) : (
                    <div className="w-full h-full p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <pre className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed">
                        {selectedNote.content || "This note is empty. Click Edit to add content."}
                      </pre>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-primary/10">
                  <div className="flex gap-2">
                    {selectedNote.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Last modified: {selectedNote.lastModified}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-center">
                <div>
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Note Selected</h3>
                  <p className="text-muted-foreground">Select a note from the sidebar to start editing</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScratchpadWorkspace;