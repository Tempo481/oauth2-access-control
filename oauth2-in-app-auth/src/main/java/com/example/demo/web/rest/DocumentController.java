package com.example.demo.web.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Document;
import com.example.demo.service.DocumentService;

@RestController
@RequestMapping("/document")
public class DocumentController {

    private final DocumentService documentService;

    public DocumentController(DocumentService service) {
        this.documentService = service;
    }

    @GetMapping("/{id}")
    public Document getDocument(@PathVariable long id) {
        return documentService.getDocumentById(id);
    }
    
    @GetMapping("all")
    public Iterable<Document> getAllDocuments() {
    	return documentService.getAllDocuments();
    }    
    
}
