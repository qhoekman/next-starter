/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import '@testing-library/cypress/add-commands';
import './env/env'; // make sure that process.env is available while testing
import './mocks/mocks';
