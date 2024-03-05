
describe('Personal Task Manager - Task CRUD Operations', () => {
  it('should allow a user to create a new task', () => {
    cy.visit('/')

    // Create a new task
    const taskTitle = `Task - ${Cypress._.random(0, 1e6)}`
    cy.get('[data-test="task-input-title"]').type(taskTitle)
    cy.get('[data-test="task-submit"]').click()

    // Verify the task was added to the list
    cy.contains('[data-test="task"]', taskTitle).should('exist')
  })

  it('should allow a user to mark a task as completed', () => {
    cy.visit('/')
    
    // Mark an existing task as completed
    const taskTitle = `Task - ${Cypress._.random(0, 1e6)}`
    cy.get('[data-test="task-input-title"]').type(taskTitle)
    cy.get('[data-test="task-submit"]').click()
    cy.contains('[data-test="task"]', taskTitle).within(() => {
       cy.get('[data-test="task-complete"]').click()
    })

    // Verify the task is marked as completed
    cy.contains('[data-test="task"][data-completed="true"]', taskTitle).should('exist')
  })

  it('should allow a user to filter tasks by completion status', () => {
    cy.visit('/')
    
    // Add two tasks, one completed and one not
    const completedTaskTitle = `Completed Task - ${Cypress._.random(0, 1e6)}`
    const uncompletedTaskTitle = `Uncompleted Task - ${Cypress._.random(0, 1e6)}`
    cy.get('[data-test="task-input-title"]').type(completedTaskTitle)
    cy.get('[data-test="task-submit"]').click()
    cy.get('[data-test="task-input-title"]').clear().type(uncompletedTaskTitle)
    cy.get('[data-test="task-submit"]').click()
    cy.contains('[data-test="task"]', completedTaskTitle).within(() => {
       cy.get('[data-test="task-complete"]').click()
    })

    // Filter by completed tasks
    cy.get('[data-test="filter-completed"]').click()

    // Verify that only the completed task is displayed
    cy.contains('[data-test="task"][data-completed="true"]', completedTaskTitle).should('exist')
    cy.contains('[data-test="task"]', uncompletedTaskTitle).should('not.exist')

    // Filter by uncompleted tasks
    cy.get('[data-test="filter-uncompleted"]').click()

    // Verify that only the uncompleted task is displayed
    cy.contains('[data-test="task"]', uncompletedTaskTitle).should('exist')
    cy.contains('[data-test="task"][data-completed="true"]', completedTaskTitle).should('not.exist')
  })
})
