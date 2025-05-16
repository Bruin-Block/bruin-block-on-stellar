#![no_std]
use soroban_sdk::{contract, contractimpl, Env, String}; // ✅ Import `String` from the SDK

#[contract]
pub struct GreenPassBadge;

#[contractimpl]
impl GreenPassBadge {
    pub fn hello(env: Env) -> String {
        String::from_str(&env, "Welcome to GreenPass!")
    }
}