package com.example.demo.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Document;
import com.example.demo.repository.DocumentRepository;
import com.example.demo.service.DocumentService;

/**
 * REST controller for managing {@link com.example.demo.entity.Document}.
 */
@RestController
public class DocumentController {

    private final Logger log = LoggerFactory.getLogger(DocumentController.class);

    private final DocumentService documentService;

    private final DocumentRepository documentRepository;

    public DocumentController(DocumentService documentService, DocumentRepository documentRepository) {
        this.documentService = documentService;
        this.documentRepository = documentRepository;
    }

    /**
     * {@code GET  /documents} : get all the documents.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of documents in body.
     */
    @GetMapping("/documents")
    public List<Document> getAllDocuments() {
        log.debug("REST request to get all Documents");
        return documentService.findAll();
    }

}
