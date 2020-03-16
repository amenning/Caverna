package com.example.caverna.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.File;
import java.io.FilenameFilter;

@Controller
public class HomeController {
    @RequestMapping(
        value = "/",
        method = RequestMethod.GET
    )
    public String index(Model model) {
        // Grab main css file with hashed name
        File f = new File("src/main/resources/static/css");
        File[] matchingFiles = f.listFiles(new FilenameFilter() {
            public boolean accept(File dir, String name) {
                return name.startsWith("main") && name.endsWith("css");
            }
        });
        String mainCssFilename = "/css/" + matchingFiles[0].getName();
        model.addAttribute("mainCssFilename", mainCssFilename);

        return "index";
    }
}
