/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.fag.trabalhospring.layout.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author joseem
 * Classe controladora;
 * Inicia a página html no navegador, usando a url "localhost:8080/termo";
 * retornando a página HTML create;
 * 
 */
@Controller
public class TaskController {
    @GetMapping("/termo")
    public String main(){
        return "create";
    }
    
}
