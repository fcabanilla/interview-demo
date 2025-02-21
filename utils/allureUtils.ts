import { test } from "@playwright/test";
import * as allure from "allure-js-commons";

export function allureDecorator({ title, description, severity, owner, links, parameters, environment }: {
    title?: string;
    description?: string;
    severity?: 'trivial' | 'minor' | 'normal' | 'critical' | 'blocker';
    owner?: string;
    links?: { name: string; url: string }[];
    parameters?: Record<string, string | number>;
    environment?: Record<string, string | number>;
  }, responseBody: object) {
    
    if (title) allure.label('title', String(title));
    if (description) allure.description(String(description));
    if (severity) allure.severity(severity);
    if (owner) allure.owner(String(owner));
  
    if (links) {
      links.forEach(link => {
        allure.link(String(link.url), String(link.name));
      });
    }
  
    if (parameters) {
      Object.entries(parameters).forEach(([key, value]) => {
        allure.parameter(String(key), String(value));
      });
    }
  
    // Attach JSON response
    allure.attachment('Response JSON', JSON.stringify(responseBody, null, 2), 'application/json');
  }