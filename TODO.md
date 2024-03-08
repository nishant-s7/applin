# Applin

## PS -  Dairy Farm Managert
Cost model, consumption, production and management (Cow, Buffalo)

## Things to Implement
- **Herd Management & Individual Animal Tracking**

  - [ ] Individual animal profiles
  - [ ] Animal Health tracking
  - [ ] Breeding management
  - [ ] Production monitoring

- **Farm Operations & Financial Management**

  - [ ] Feed management
  - [ ] Expense Tracking

## Planned Schema

- **User**
  - firstName
  - lastName
  - email
  - phoneNo
  - password
  - animals
- **Animal**
  - type
  - breed
  - dob
  - healthStatus
  - productionHistory (Product)
  - vaccinationHistory (Vaccination)
  - breedingHistory (Breeding)
- **Product**
  - Animal
  - date
  - quantity
- **Expense**
  - category
  - amount
  - description
- **Vaccination**
  - name
  - administeredDate
  - dueDate
- **Breeding**
  - inseminationDate
  - expectedDeliveryDate
  - Animal

# Pages

1. Animals
1. Sales
1. Expenses
1. Breeding