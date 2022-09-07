package org.example.model;

import java.util.Set;
import lombok.Data;

@Data
public class ToDoList {
    private Set<ToDoList> estados;

    private String title;
    private String description;
   
    

    public ToDoList(String title, String description) {
        this.title = title;
        this.description = description;  
    }
     public String getTitle() {
        return title;
    }

    
    
}
