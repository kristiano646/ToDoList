package org.example.service;

import org.example.model.ToDoList;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.HashSet;
import java.util.Set;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@Path("/to-do-list")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ToDoListService {

    private Set<ToDoList> toDoLists = new HashSet<>();
    Map<String, ToDoList> todoData = new HashMap<String, ToDoList>();
    private static final Logger logger = LoggerFactory.getLogger(ToDoListService.class);

    public ToDoListService() {
        toDoLists.add(new ToDoList("Test1", "desc test1"));
        toDoLists.add(new ToDoList("Test2", "desc test2"));
        toDoLists.add(new ToDoList("Test3", "desc test3"));
    }

    @GET
    public Set<ToDoList> list() {
        return toDoLists;
    }

    @RequestMapping(value = EmpRestURIConstants.GET_EMP, method = RequestMethod.GET)
    public @ResponseBody
    ToDoList getTitle(@PathVariable("title") String title) {
        logger.info("Start getTitle. TITLE=" + title);

        return todoData.get(title);
    }
    
    @RequestMapping(value = EmpRestURIConstants.GET_ALL_EMP, method = RequestMethod.GET)
	public @ResponseBody List<ToDoList> getAllEmployees() {
		logger.info("Start getAllEmployees.");
		List<ToDoList> emps = new ArrayList<ToDoList>();
		Set<String> title = todoData.keySet();
		for(String i : title){
			emps.add(todoData.get(i));
		}
		return emps;
	}

//    @GET
//    public Set<ToDoList> listT(ToDoList title) {  
//        toDoLists.forEach(value -> {
//            if (value.getTitle().equals(title.getTitle())) {      
//            }
//        });
//        return toDoLists;
//    }
//    @POST
//    public Set<ToDoList> adde(ToDoList element) {
//       toDoLists.add(element);
//       return toDoLists;
//   }
    @POST
    public Set<ToDoList> add(ToDoList element) {
        toDoLists.add(element);
        return toDoLists;
    }

    @DELETE
    public Set<ToDoList> delete(ToDoList element) {
        toDoLists.removeIf(value -> value.getTitle().contentEquals(element.getTitle()));
        return toDoLists;
    }

    @PUT
    public Set<ToDoList> update(ToDoList element) {
        toDoLists.forEach(value -> {
            if (value.getTitle().equals(element.getTitle())) {
                value.setDescription(element.getDescription());
            }
        });
        return toDoLists;
    }

}
