package com.mycompany.myapp.service.dto;

public class OrderReturnStatus {
    private boolean ok;
    private String message;

    public boolean isOk() {
        return ok;
    }

    public OrderReturnStatus setOk(boolean ok) {
        this.ok = ok;
        return this;
    }

    public String getMessage() {
        return message;
    }

    public OrderReturnStatus setMessage(String message) {
        this.message = message;
        return this;
    }
}
